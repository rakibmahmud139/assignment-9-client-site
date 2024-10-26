import Heading from "@/components/shared/Heading";
import { Box, Container } from "@mui/material";
import LostItemCard from "./LostItemCard";

const ResentLostItem = () => {
  return (
    <Box mt={8} mx={12}>
      <Box mb={8}>
        <Heading title="Recent Lost Item" />

        <LostItemCard />
      </Box>
    </Box>
  );
};

export default ResentLostItem;
