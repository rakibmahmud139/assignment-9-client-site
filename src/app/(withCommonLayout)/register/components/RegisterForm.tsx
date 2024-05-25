"use client";

import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import { FieldValues } from "react-hook-form";
import { Grid, Button, Typography } from "@mui/material";
import Link from "next/link";
import { loginUser } from "@/services/actions/loginUser";
import { toast } from "sonner";
import { authKey } from "@/types";
import { setToLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import FileUploader from "@/components/forms/FileUploader";
import { imageUpload } from "@/utils/imageUpload";
import { registerUser } from "@/services/actions/registerUser";

const RegisterForm = () => {
  const router = useRouter();

  const handleRegister = async (data: FieldValues) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Your password and confirm password not match🥲");
    }

    const photoUrl = await imageUpload(data.file);
    const ageNum = Number(data?.profile?.age);

    const resData = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
      role: data?.role,
      profile: {
        bio: data?.profile?.bio,
        age: ageNum,
        photoUrl,
      },
    };

    const res = await registerUser(resData);

    if (res.success) {
      toast.success(res.message);
      router.push("/login");
    }
  };

  return (
    <FLForms onSubmit={handleRegister}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <FLInput
            name="name"
            label="User Name"
            placeholder="User Name"
            required={true}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FLInput
            name="email"
            label="Email"
            placeholder="Email"
            required={true}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FLInput
            name="password"
            label="Password"
            placeholder="Password"
            required={true}
            type="password"
            fullWidth={true}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FLInput
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
            required={true}
            type="password"
            fullWidth={true}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FLInput
            name="role"
            label="Role"
            placeholder="Role"
            required={true}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FLInput
            name="profile.bio"
            label="Bio"
            placeholder="Bio"
            required={true}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FLInput
            name="profile.age"
            label="Age"
            placeholder="Age"
            required={true}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FileUploader name="file" fullWidth={true} />
        </Grid>
      </Grid>
      <Typography my={2} textAlign="center">
        You have an account?
        <Link href={"/login"}>
          <Typography component="span" color="#00bcd4" ml={1}>
            Login Here
          </Typography>
        </Link>
      </Typography>
      <Button
        type="submit"
        sx={{
          mt: "28px",
        }}
      >
        Register
      </Button>
    </FLForms>
  );
};

export default RegisterForm;
