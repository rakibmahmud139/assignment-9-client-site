"use client";

import ClaimModal from "@/components/claimModal/ClaimModal";
import { useGetFoundItemQuery } from "@/redux/features/foundItem/foundItemApi";
import { TFoundItem } from "@/types/common";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";

const FoundItemsCard = () => {
  const { data: foundItems } = useGetFoundItemQuery({});

  return (
    <div className="md:mx-16 mx-12 mb-4">
      <Grid container spacing={4}>
        {foundItems?.data?.map((item: TFoundItem) => (
          <Grid key={item.id} item md={4} lg={3} sm={6} xs={12}>
            <Card sx={{ maxWidth: 600 }}>
              <CardActionArea>
                <Image
                  src={item?.photo}
                  alt="image"
                  width={345}
                  height={200}
                  style={{ height: 200 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.foundItemName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <PlaceIcon /> {item?.location}
                  </Typography>
                  <Typography variant="body2" mt={1} color="text.secondary">
                    Description: {item?.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Link href={`/found-item/${item?.id}`}>
                  <Button sx={{ bgcolor: "#32c2c7" }}>View Details</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FoundItemsCard;
