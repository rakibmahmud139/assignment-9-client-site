"use client";

import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import { useGetClaimItemQuery } from "@/redux/features/claimItem/claimItemApi";
import { TClaimItem } from "@/types/claimItem/TClaimItem";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";

const MyClaimItemCard = () => {
  const { data: user } = useGetMyProfileQuery({});
  const { data: claimItems } = useGetClaimItemQuery({
    email: user?.data?.user?.email,
  });

  return (
    <div>
      <Grid container spacing={4}>
        {claimItems?.data?.map((claimItem: TClaimItem) => (
          <Grid key={claimItem?.id} item md={4}>
            <Card sx={{ maxWidth: 345, maxHeight: 600, mx: "auto" }}>
              <Image
                src={claimItem?.photo}
                alt="claimPhoto"
                width={345}
                height={120}
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {claimItem?.foundItem?.foundItemName}
                </Typography>
                <Typography mt={1}>
                  <Typography variant="h6">Founder Contact:</Typography>
                  {claimItem?.foundItem?.contactNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary" my={1}>
                  <Typography variant="h6">Description:</Typography>{" "}
                  {claimItem?.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Typography variant="h6">Status:</Typography>{" "}
                  {claimItem?.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyClaimItemCard;
