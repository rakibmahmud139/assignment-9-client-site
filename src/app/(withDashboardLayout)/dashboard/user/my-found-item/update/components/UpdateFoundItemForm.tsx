"use client";

import DatePicker from "@/components/forms/DatePicker";
import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import FileUploader from "@/components/forms/FileUploader";
import {
  useGetSingleFoundItemQuery,
  useUpdateFoundItemMutation,
} from "@/redux/features/foundItem/foundItemApi";
import { imageUpload } from "@/utils/imageUpload";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UpdateFoundItemForm = ({ itemId }: { itemId: string }) => {
  const router = useRouter();

  const { data: foundItem } = useGetSingleFoundItemQuery(itemId);
  const [updateFoundItem] = useUpdateFoundItemMutation();

  const handleUpdateFoundItem = async (data: FieldValues) => {
    const photoUrl = await imageUpload(data.file);

    if (photoUrl) {
      const resData = {
        foundItemName: data?.foundItemName,
        description: data?.description,
        location: data?.location,
        contactNumber: data?.contactNumber,
        photo: photoUrl,
      };

      const updateData = {
        id: itemId,
        body: resData,
      };

      const res = await updateFoundItem(updateData).unwrap();

      console.log(res);

      if (res?.success) {
        toast.success(res?.message);
        router.push("/dashboard/user/my-found-item");
      }
    } else if (!photoUrl) {
      const resData = {
        foundItemName: data?.foundItemName,
        description: data?.description,
        location: data?.location,
        contactNumber: data?.contactNumber,
      };

      const updateData = {
        id: itemId,
        body: resData,
      };

      const res = await updateFoundItem(updateData).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        router.push("/dashboard/user/my-found-item");
      }
    }
  };

  return (
    <Box>
      {foundItem?.data ? (
        <FLForms
          onSubmit={handleUpdateFoundItem}
          defaultValues={foundItem?.data}
        >
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <FLInput
                name="foundItemName"
                label="Found ItemName"
                placeholder="Found ItemName"
                required={true}
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FLInput
                name="description"
                label="Description"
                placeholder="Description"
                required={true}
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FLInput
                name="location"
                label="Location"
                placeholder="Location"
                required={true}
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FLInput
                name="contactNumber"
                label="Contact Number"
                placeholder="Contact Number"
                required={true}
                fullWidth={true}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <FileUploader
                name="file"
                label="Found Item Photo"
                fullWidth={true}
              />
            </Grid>
          </Grid>

          <Button
            variant="outlined"
            type="submit"
            sx={{
              mt: "28px",
            }}
          >
            Update
          </Button>
        </FLForms>
      ) : (
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
      )}
    </Box>
  );
};

export default UpdateFoundItemForm;
