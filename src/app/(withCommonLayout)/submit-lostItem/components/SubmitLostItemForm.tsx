"use client";

import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import FileUploader from "@/components/forms/FileUploader";
import SelectedField from "@/components/forms/Selecter";
import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import { useSubmitLostItemMutation } from "@/redux/features/lostItem/lostItemApi";
import { imageUpload } from "@/utils/imageUpload";
import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const SubmitLostItemForm = () => {
  const router = useRouter();
  const { data, isLoading } = useGetCategoryQuery({});
  const [submitLostItem, { isLoading: submitting }] =
    useSubmitLostItemMutation();

  const handleSubmitLostItem = async (data: FieldValues) => {
    const photo = await imageUpload(data?.file);

    const resData = {
      categoryId: data?.categoryId,
      lostItemName: data?.lostItemName,
      description: data?.description,
      location: data?.location,
      contactNumber: data?.contactNumber,
      photo,
    };

    const res = await submitLostItem(resData).unwrap();

    if (res?.success) {
      router.refresh();
      toast.success(res?.message);
    }
  };

  return (
    <Container>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <FLForms onSubmit={handleSubmitLostItem}>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <FLInput
                name="lostItemName"
                label="Lost Item Name"
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FileUploader name="file" label="Item Image" fullWidth={true} />
            </Grid>
            <Grid item md={6} xs={12}>
              <FLInput
                name="description"
                label="Description"
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FLInput name="location" label="location" fullWidth={true} />
            </Grid>
            <Grid item md={6} xs={12}>
              <FLInput
                name="contactNumber"
                label="Contact Number"
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <SelectedField
                items={data?.data}
                name="categoryId"
                label="Category"
                fullWidth={true}
              />
            </Grid>
          </Grid>
          <Box textAlign="center" mt={8}>
            <Button type="submit" disabled={submitting}>
              Submit
            </Button>
          </Box>
        </FLForms>
      )}
    </Container>
  );
};

export default SubmitLostItemForm;
