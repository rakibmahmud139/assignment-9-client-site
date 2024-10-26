"use client";

import DatePicker from "@/components/forms/DatePicker";
import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import FileUploader from "@/components/forms/FileUploader";
import SelectedField from "@/components/forms/Selecter";
import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import { useSubmitFoundItemMutation } from "@/redux/features/foundItem/foundItemApi";
import { imageUpload } from "@/utils/imageUpload";
import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const FoundItemForm = () => {
  const router = useRouter();
  const { data, isLoading } = useGetCategoryQuery({});

  const [submitFoundItem, { isLoading: submitting }] =
    useSubmitFoundItemMutation();

  const handleSubmitLostItem = async (data: FieldValues) => {
    const photo = await imageUpload(data?.file);
    const resData = {
      categoryId: data?.categoryId,
      foundItemName: data?.foundItemName,
      description: data?.description,
      location: data?.location,
      date: data?.date,
      contactNumber: data?.contactNumber,
      photo,
    };

    const res = await submitFoundItem(resData).unwrap();
    if (res?.success) {
      router.refresh();
      toast.success(res?.message);
    }
  };

  const defaultValues = {
    categoryId: data?.categoryId,
    foundItemName: "",
    description: "",
    location: "",
    contactNumber: "",
    photo: "",
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
        <FLForms onSubmit={handleSubmitLostItem} defaultValues={defaultValues}>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <FLInput
                name="foundItemName"
                label="Found Item Name"
                fullWidth={true}
                required={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FileUploader name="file" label="Item Image" fullWidth={true} />
            </Grid>
            <Grid item md={6} xs={12}>
              <FLInput
                name="location"
                required={true}
                label="location"
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <DatePicker
                name="date"
                label="location"
                fullWidth={true}
                required={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FLInput
                name="description"
                label="Description"
                required={true}
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FLInput
                name="contactNumber"
                label="Contact Number"
                fullWidth={true}
                required={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <SelectedField
                items={data?.data}
                name="categoryId"
                label="Category"
                fullWidth={true}
                required={true}
              />
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            mt={8}
            mb={4}
            display="flex"
            justifyContent="space-between"
          >
            <Button
              type="submit"
              sx={{ bgcolor: "#32c2c7" }}
              disabled={submitting}
            >
              Submit Found Item
            </Button>

            <Link href={"/found-item"}>
              <Button variant="outlined">For Claim A Item Go Here</Button>
            </Link>
          </Box>
        </FLForms>
      )}
    </Container>
  );
};

export default FoundItemForm;
