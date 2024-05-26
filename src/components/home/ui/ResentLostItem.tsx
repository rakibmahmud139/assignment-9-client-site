import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { TLostItem } from "@/types";
import LostItemCard from "./LostItemCard";

export const getRecentLostItems = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lost-items `, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const ResentLostItem = async () => {
  const lostItems = await getRecentLostItems();
  console.log(lostItems?.data);
  return (
    <Box mt={16}>
      <Box mb={8}>
        <Typography
          textAlign="center"
          component="h1"
          variant="h4"
          borderBottom={1}
          borderColor="pink"
          width={420}
          mx="auto"
        >
          <Typography component="span" color="gold" fontSize="36px">
            ***
          </Typography>
          Recent Lost Items
          <Typography component="span" color="gold" fontSize="36px">
            ***
          </Typography>
        </Typography>
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
