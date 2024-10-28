"use client";

import { useGetLostItemQuery } from "@/redux/features/lostItem/lostItemApi";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const RecentMyLostItem = ({ email }: { email?: string }) => {
  let dataInfo;
  let loadingInfo;

  if (email) {
    const { data: lostItems, isLoading } = useGetLostItemQuery({
      email: email,
    });

    dataInfo = lostItems;
    loadingInfo = isLoading;
  } else {
    const { data: lostItems, isLoading } = useGetLostItemQuery({});

    dataInfo = lostItems;
    loadingInfo = isLoading;
  }

  const columns: GridColDef[] = [
    { field: "lostItemName", headerName: "Item Name", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "found", headerName: "Found", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
  ];
  return (
    <Box mb={36}>
      <Box sx={{ height: "100%", width: "100%" }}>
        {loadingInfo ? (
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
            rows={dataInfo?.data?.slice(0, 4) ?? []}
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
