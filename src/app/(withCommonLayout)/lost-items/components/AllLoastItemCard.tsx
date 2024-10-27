"use client";

import { useGetLostItemQuery } from "@/redux/features/lostItem/lostItemApi";
import { TLostItem } from "@/types";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const AllLostItemCard = () => {
  const { data: lostItems } = useGetLostItemQuery({});

  return (
    <Grid container spacing={4}>
      {lostItems?.data?.map((lostItem: TLostItem) => (
        <Grid key={lostItem?.id} item md={3} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <Box>
              <Image
                src={lostItem?.photo}
                width={500}
                height={60}
                alt="product image"
                style={{ height: 200 }}
              />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {lostItem?.lostItemName}
              </Typography>
              <Typography>
                <PlaceIcon /> {lostItem?.location}
              </Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                Description: {lostItem?.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Link href={`/lost-items/${lostItem?.id}`}>
                <Button sx={{ bgcolor: "#32c2c7" }}>View Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllLostItemCard;
