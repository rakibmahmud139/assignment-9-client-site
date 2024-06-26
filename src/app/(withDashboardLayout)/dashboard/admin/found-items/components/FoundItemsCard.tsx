"use client";

import { useGetFoundItemQuery } from "@/redux/features/foundItem/foundItemApi";
import { useDebounce } from "@/redux/hooks";
import { Box, Button, Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TFoundItem } from "../../../../../../types/common";

const FoundItemsCard = () => {
  const query: Record<string, unknown> = {};
  const [searchTerm, setSearchTerm] = useState("");

  const debounceTerm = useDebounce({
    searchQuery: searchTerm,
    delay: 1000,
  });

  if (!!debounceTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data: foundItems } = useGetFoundItemQuery({ ...query });

  return (
    <Box>
      <Typography
        display="flex"
        gap={{
          md: 2,
          xs: 1,
        }}
        justifyContent="center"
        alignItems="center"
        mb={8}
      >
        Filter & Search:{" "}
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
        />
      </Typography>

      <Grid container spacing={2}>
        {foundItems?.data?.map((foundItem: TFoundItem) => (
          <Grid key={foundItem?.id} item md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Image
                src={foundItem?.photo}
                alt="FoundItemImage"
                width={345}
                height={120}
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {foundItem?.foundItemName}
                </Typography>
                <Typography>Location: {foundItem?.location}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {foundItem?.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoundItemsCard;
