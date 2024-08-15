"use client";

import { useGetLostItemQuery } from "@/redux/features/lostItem/lostItemApi";
import { TLostItem } from "@/types";
import { Box, Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import PlaceIcon from "@mui/icons-material/Place";

const LostItemCard = () => {
  const { data: lostItems, isLoading } = useGetLostItemQuery({});

  return (
    <Box>
      {!isLoading && (
        <Grid container spacing={2}>
          {lostItems?.data?.slice(0, 6).map((lostItem: TLostItem) => (
            <Grid key={lostItem?.id} item md={4}>
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
                  <Typography variant="body2" color="text.secondary">
                    Description: {lostItem?.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={"/lost-items"}>
                    <Button>All Lost Item</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default LostItemCard;
