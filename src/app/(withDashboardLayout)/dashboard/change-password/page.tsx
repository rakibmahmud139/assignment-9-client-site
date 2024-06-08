import { Box, Typography } from "@mui/material";
import React from "react";
import ChangePasswordForm from "./components/ChangePasswordForm";
import Heading from "@/components/shared/Heading";

const ChangePasswordPage = () => {
  return (
    <Box mb={28}>
      <Box>
        <Heading title="Change Password" />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <ChangePasswordForm />
      </Box>
    </Box>
  );
};

export default ChangePasswordPage;
