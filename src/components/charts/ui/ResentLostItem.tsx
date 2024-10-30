import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import LostItemCard from "./LostItemCard";

const ResentLostItem = () => {
  return (
    <Box mt={8}>
      <Heading title="Recent Lost Item" />
      <div className="md:mx-16 mx-12 mb-12">
        <LostItemCard />
      </div>
    </Box>
  );
};

export default ResentLostItem;
