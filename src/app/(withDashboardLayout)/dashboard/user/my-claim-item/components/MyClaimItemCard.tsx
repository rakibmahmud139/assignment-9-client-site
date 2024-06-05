"use client";

import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import { useGetClaimItemQuery } from "@/redux/features/claimItem/claimItemApi";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const MyClaimItemCard = () => {
  const { data: user } = useGetMyProfileQuery({});
  const { data: claimItems } = useGetClaimItemQuery({
    email: user?.data?.user?.email,
  });

  console.log(claimItems);

  return (
    <div>
      <Grid container spacing={2}>
        {claimItems?.data?.map((claimItem) => (
          <Grid key={claimItem?.id} item md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Image
                src={claimItem?.photo}
                alt="FoundItemImage"
                width={345}
                height={120}
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
              <CardActions>
                <Link href={`/lost-items/${claimItem?.id}`}>
                  <Button>details</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyClaimItemCard;
