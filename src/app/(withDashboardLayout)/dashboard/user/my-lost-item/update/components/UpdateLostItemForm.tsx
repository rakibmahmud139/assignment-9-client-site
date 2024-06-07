"use client";

import DatePicker from "@/components/forms/DatePicker";
import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import FileUploader from "@/components/forms/FileUploader";
import {
  useGetSingleLostItemQuery,
  useUpdateLostItemMutation,
} from "@/redux/features/lostItem/lostItemApi";
import { imageUpload } from "@/utils/imageUpload";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UpdateLostItemForm = ({ itemId }: { itemId: string }) => {
  const router = useRouter();

  const { data: lostItem } = useGetSingleLostItemQuery(itemId);
  const [updateLostItem] = useUpdateLostItemMutation();

  const handleUpdateLostItem = async (data: FieldValues) => {
    const photoUrl = await imageUpload(data.file);

    if (photoUrl) {
      const resData = {
        lostItemName: data?.lostItemName,
        description: data?.description,
        location: data?.location,
        contactNumber: data?.contactNumber,
        photo: photoUrl,
      };

      const updateData = {
        id: itemId,
        body: resData,
      };

      const res = await updateLostItem(updateData).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        router.push("/dashboard/user/my-lost-item");
      }
    } else if (!photoUrl) {
      const resData = {
        lostItemName: data?.lostItemName,
        description: data?.description,
        location: data?.location,
        contactNumber: data?.contactNumber,
      };

      const updateData = {
        id: itemId,
        body: resData,
      };

      const res = await updateLostItem(updateData).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        router.push("/dashboard/user/my-lost-item");
      }
    }
  };
  return (
    <Box>
      {lostItem?.data ? (
        <FLForms onSubmit={handleUpdateLostItem} defaultValues={lostItem?.data}>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <FLInput
                name="lostItemName"
                label="Lost ItemName"
                placeholder="Lost ItemName"
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

export default UpdateLostItemForm;
