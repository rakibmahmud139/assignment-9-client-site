"use client";

import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePasswordForm = () => {
  const router = useRouter();
  const [changePassword] = useChangePasswordMutation();

  const handleChangePassword = async (data: FieldValues) => {
    if (data.newPassword !== data.confirmPassword) {
      return toast.error("Your password and confirm password not match🥲");
    }

    const resData = {
      currentPassword: data?.currentPassword,
      newPassword: data?.newPassword,
    };

    const res = await changePassword(resData).unwrap();

    if (res?.success) {
      toast.success(res?.message);
      router.push("/login");
    }
  };

  const defaultValue = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  return (
    <FLForms onSubmit={handleChangePassword} defaultValues={defaultValue}>
      <Grid container spacing={4}>
        <Grid item md={12} xs={12}>
          <FLInput
            name="currentPassword"
            label="Current Password"
            placeholder="Current Password"
            required={true}
            fullWidth={true}
            type="password"
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <FLInput
            name="newPassword"
            label="New Password"
            placeholder="Password"
            required={true}
            fullWidth={true}
            type="password"
          />
        </Grid>

        <Grid item md={12} xs={12}>
          <FLInput
            name="confirmPassword"
            label="confirm Password"
            placeholder="Confirm Password"
            required={true}
            fullWidth={true}
            type="password"
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        sx={{
          mt: "28px",
        }}
      >
        Change Password
      </Button>
    </FLForms>
  );
};

export default ChangePasswordForm;
