import { Box, Typography } from "@mui/material";
import React from "react";
import ChangePasswordForm from "./components/ChangePasswordForm";

const ChangePasswordPage = () => {
  return (
    <Box mb={28}>
      <Typography
        textAlign="center"
        component="h1"
        variant="h4"
        borderBottom={1}
        width={420}
        mx="auto"
        mb={8}
      >
        <Typography component="span" color="gold" fontSize="36px">
          ***
        </Typography>
        Change Password
        <Typography component="span" color="gold" fontSize="36px">
          ***
        </Typography>
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center">
        <ChangePasswordForm />
      </Box>
    </Box>
  );
};

export default ChangePasswordPage;
