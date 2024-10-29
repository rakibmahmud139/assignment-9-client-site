"use client";

import Heading from "@/components/shared/Heading";
import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import { useGetClaimItemQuery } from "@/redux/features/claimItem/claimItemApi";
import { TClaimItem } from "@/types/claimItem/TClaimItem";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

const MyClaimItemCard = () => {
  const { data: user } = useGetMyProfileQuery({});
  const { data: claimItems, isLoading } = useGetClaimItemQuery({
    email: user?.data?.user?.email,
  });

  const columns: GridColDef[] = [
    {
      field: "photo",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            width: 50,
            height: 50,
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          {params.value ? (
            <Image
              src={params.value}
              alt="Lost Item Image"
              width={50}
              height={50}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : (
            <Typography variant="caption" color="textSecondary">
              No Image
            </Typography>
          )}
        </Box>
      ),
    },
    { field: "securityFeatures", headerName: "Security Features", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "distinguishingFeatures",
      headerName: "Distinguishing Features",
      flex: 1,
    },
  ];

  return (
    <div>
      <Heading title="My Claim Items" />

      <Box>
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
              rows={claimItems?.data ?? []}
              columns={columns}
              hideFooterPagination={true}
              hideFooter={true}
            />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default MyClaimItemCard;
