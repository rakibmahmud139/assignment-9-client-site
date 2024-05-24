import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { TLostItem } from "@/types";
import LostItemCard from "./LostItemCard";

export const getResentLostItem = async () => {
  const res = await fetch("http://localhost:5000/api/lost-items");
  const data = await res.json();
  return data;
};

const ResentLostItem = async () => {
  const lostItems = await getResentLostItem();
  return (
    <Box mt={16}>
      <Box mb={8}>
        <Typography
          textAlign="center"
          component="h1"
          variant="h4"
          borderBottom={1}
          borderColor="pink"
          width={320}
          mx="auto"
        >
          Recent Lost Items
        </Typography>
        <Box mt={8}>
          <Grid container spacing={2}>
            {lostItems?.data?.slice(0, 5).map((lostItem: TLostItem) => (
              <LostItemCard key={lostItem.id} lostItem={lostItem} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ResentLostItem;
