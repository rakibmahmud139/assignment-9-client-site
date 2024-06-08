import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import LostItemCard from "./LostItemCard";

const ResentLostItem = () => {
  return (
    <Box mt={16}>
      <Box mb={8}>
        <Heading title="Recent LostItem" />
        <Box mt={8}>
          <LostItemCard />
        </Box>
      </Box>
    </Box>
  );
};

export default ResentLostItem;
