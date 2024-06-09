"use client";

import { useGetLostItemQuery } from "@/redux/features/lostItem/lostItemApi";
import { TLostItem } from "@/types";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const AllLostItemCard = () => {
  const { data: lostItems } = useGetLostItemQuery({});

  return (
    <Grid container spacing={6}>
      {lostItems?.data.map((lostItem: TLostItem) => (
        <Grid item md={4} gap={1} key={lostItem.id}>
          <Card sx={{ maxWidth: 345, borderRadius: "48px", color: "#bbdefb" }}>
            <CardActionArea
              sx={{
                textAlign: "center",
              }}
            >
              <Avatar
                alt={lostItem?.lostItemName}
                src={lostItem?.photo as string}
                sx={{ width: 120, height: 120, my: "32px", mx: "auto" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {lostItem?.lostItemName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {lostItem?.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {lostItem?.date?.substring(0, 10)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllLostItemCard;
