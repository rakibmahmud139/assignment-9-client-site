"use client";

import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/userApi";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UserUpdateForm = ({ id }: { id: string }) => {
  const { data: userInfo } = useGetSingleUserQuery(id);
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleUpdate = async (data: FieldValues) => {
    const resData = {
      id,
      body: data,
    };

    const res = await updateUser(resData).unwrap();

    if (res?.success) {
      toast.success(res?.message);
    }
  };

  return (
    <Box mb={36}>
      {userInfo?.data && (
        <FLForms onSubmit={handleUpdate} defaultValues={userInfo?.data}>
          <Grid container spacing={4}>
            <Grid item md={12} xs={12}>
              <FLInput
                name="name"
                label="Name"
                placeholder="Name"
                required={true}
                fullWidth={true}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <FLInput
                name="email"
                label="Email"
                placeholder="Email"
                required={true}
                fullWidth={true}
              />
            </Grid>
          </Grid>

          <Button
            disabled={isLoading}
            type="submit"
            sx={{
              mt: "28px",
            }}
          >
            Update
          </Button>
        </FLForms>
      )}
    </Box>
  );
};

export default UserUpdateForm;
