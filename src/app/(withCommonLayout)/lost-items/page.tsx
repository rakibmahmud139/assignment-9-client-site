import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import AllLostItemCard from "./components/AllLoastItemCard";

const AllLostItemPage = () => {
  return (
    <Box mb={16}>
      <Heading title="All Lost Items" />
      <Box>
        <AllLostItemCard />
      </Box>
    </Box>
  );
};

export default AllLostItemPage;
