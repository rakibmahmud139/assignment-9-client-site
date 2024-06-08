"use client";

import { useUpdateStatusMutation } from "@/redux/features/claimItem/claimItemApi";
import { Box, Button } from "@mui/material";
import { toast } from "sonner";

const UpdateStatus = ({ id }: { id: string }) => {
  const [updateStatus] = useUpdateStatusMutation();

  const handleUpdateStatus = async (value: string) => {
    const resData = {
      id,
      body: { status: value },
    };

    const res = await updateStatus(resData).unwrap();

    if (res?.success) {
      toast.success(res?.message);
    }
  };

  return (
    <Box display="flex" justifyContent="space-evenly" alignItems="center">
      <Button
        onClick={() => handleUpdateStatus("APPROVED")}
        size="small"
        sx={{
          bgcolor: "skyblue",
        }}
      >
        Approved
      </Button>

      <Button
        onClick={() => handleUpdateStatus("REJECTED")}
        size="small"
        sx={{
          bgcolor: "red",
        }}
      >
        Rejected
      </Button>
    </Box>
  );
};

export default UpdateStatus;
