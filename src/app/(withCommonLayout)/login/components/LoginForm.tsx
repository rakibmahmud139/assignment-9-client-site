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

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (data: FieldValues) => {
    const res = await loginUser(data);

    if (res?.data?.id && res?.data?.token) {
      toast.success(res?.message);
      setToLocalStorage(authKey, res?.data?.token);
      router.push("/");
    }
  };

  return (
    <FLForms
      onSubmit={handleLogin}
      defaultValues={{
        email: "",
        password: "",
      }}
    >
      <Grid container spacing={4}>
        <Grid item md={12}>
          <FLInput
            name="email"
            label="Email"
            placeholder="Email"
            required={true}
            fullWidth={true}
          />
        </Grid>
        <Grid item md={12}>
          <FLInput
            name="password"
            label="Password"
            placeholder="Password"
            required={true}
            fullWidth={true}
            type="password"
          />
        </Grid>
      </Grid>
      <Typography my={2} textAlign="center">
        If you new here?
        <Link href={"/register"}>
          <Typography component="span" color="#00bcd4" ml={2}>
            Register Now
          </Typography>
        </Link>
      </Typography>
      <Button
        type="submit"
        sx={{
          mt: "28px",
        }}
      >
        Login
      </Button>
    </FLForms>
  );
};

export default LoginForm;
