"use client";

import { useGetFoundItemQuery } from "@/redux/features/foundItem/foundItemApi";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const RecentMyFoundItem = ({ email }: { email?: string }) => {
  const { data: foundItems, isLoading } = useGetFoundItemQuery({
    email: email,
  });

  const rows =
    foundItems?.data?.map((item: { user: { name: any } }) => ({
      ...item,
      userName: item.user?.name,
    })) ?? [];

  const columns: GridColDef[] = [
    { field: "foundItemName", headerName: "Item Name", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "userName", headerName: "Owner", flex: 1 }, // Updated field
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
            rows={rows.slice(0, 4) ?? []}
            columns={columns}
            hideFooterPagination={true}
            hideFooter={true}
          />
        )}
      </Box>
    </Box>
  );
};

export default RecentMyFoundItem;
