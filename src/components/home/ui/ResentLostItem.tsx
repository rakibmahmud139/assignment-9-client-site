"use client";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { TLostItem } from "@/types";
import LostItemCard from "./LostItemCard";
import { useGetLostItemQuery } from "@/redux/features/lostItem/lostItemApi";
import Heading from "@/components/shared/Heading";

const ResentLostItem = () => {
  const { data: lostItems } = useGetLostItemQuery({});

  return (
    <Box mt={16}>
      <Box mb={8}>
        <Heading title="Recent LostItem" />
        <Box mt={8}>
          <Grid container spacing={2}>
            {lostItems?.data?.slice(0, 6)?.map((lostItem: TLostItem) => (
              <LostItemCard key={lostItem.id} lostItem={lostItem} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ResentLostItem;
