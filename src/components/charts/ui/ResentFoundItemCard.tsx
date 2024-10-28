"use client";

import { useGetFoundItemQuery } from "@/redux/features/foundItem/foundItemApi";
import { TFoundItem } from "@/types/common";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const RecentFoundItemsCard = () => {
  const { data: foundItems } = useGetFoundItemQuery({});

  return (
    <Box mb={4}>
      <Grid container spacing={4}>
        {foundItems?.data?.slice(0, 4).map((item: TFoundItem) => (
          <Grid key={item.id} item md={3} sm={6} xs={12}>
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
    </Box>
  );
};

export default RecentFoundItemsCard;
