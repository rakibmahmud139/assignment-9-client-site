"use client";

import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import FileUploader from "@/components/forms/FileUploader";
import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import { imageUpload } from "@/utils/imageUpload";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import UpdateUserForm from "./components/UpdateUserForm";
import Heading from "@/components/shared/Heading";

const UserUpdate = () => {
  return (
    <Box>
      <Heading title="Update Your Profile !!" />
      <Box display="flex" justifyContent="center" alignItems="center">
        <UpdateUserForm />
      </Box>
    </Box>
  );
};

export default UserUpdate;
