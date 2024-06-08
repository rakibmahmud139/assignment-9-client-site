"use client";

import { useGetLostItemQuery } from "@/redux/features/lostItem/lostItemApi";
import { Box, Button, Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TLostItem } from "../../../../../../types/common";
import { useDebounce } from "@/redux/hooks";

const LostItemsCard = () => {
  const query: Record<string, unknown> = {};
  const [searchTerm, setSearchTerm] = useState("");

  const debounceTerm = useDebounce({
    searchQuery: searchTerm,
    delay: 1000,
  });

  if (!!debounceTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data: LostItems } = useGetLostItemQuery({ ...query });

  return (
    <Box>
      <Typography
        display="flex"
        gap={{
          md: 2,
        }}
        justifyContent="center"
        alignItems="center"
        mb={8}
      >
        Filter & Search:
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
        />
      </Typography>

      <Grid container spacing={2}>
        {LostItems?.data?.map((lostItem: TLostItem) => (
          <Grid key={lostItem?.id} item md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Image
                src={lostItem?.photo}
                alt="lostItemImage"
                width={345}
                height={120}
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {lostItem?.lostItemName}
                </Typography>
                <Typography>Location: {lostItem?.location}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {lostItem?.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/lost-items`}>
                  <Button>All Lost Item</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LostItemsCard;
