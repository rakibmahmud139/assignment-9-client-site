"use client";

import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/features/user/userApi";
import { Box, CircularProgress, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { toast } from "sonner";
import Link from "next/link";
import { useGetLostItemQuery } from "@/redux/features/lostItem/lostItemApi";

const RecentMyLostItem = ({ email }: { email: string }) => {
  const { data: lostItems, isLoading } = useGetLostItemQuery({
    email: email,
  });

  console.log(lostItems);

  const columns: GridColDef[] = [
    { field: "lostItemName", headerName: "Item Name", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "found", headerName: "Found", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
  ];
  return (
    <Box mb={36}>
      <Box sx={{ height: "100%", width: "100%" }}>
        {isLoading ? (
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
        ) : (
          <DataGrid
            rows={lostItems?.data?.slice(0, 4) ?? []}
            columns={columns}
            hideFooterPagination={true}
            hideFooter={true}
          />
        )}
      </Box>
    </Box>
  );
};

export default RecentMyLostItem;
