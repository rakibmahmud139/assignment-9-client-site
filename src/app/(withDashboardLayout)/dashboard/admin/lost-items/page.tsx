import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import LostItemsCard from "./components/LostItemsCard";

const LostItemsPage = () => {
  return (
    <Box>
      <Heading title="Lost Items List" />

      <Box mt={8}>
        <LostItemsCard />
      </Box>
    </Box>
  );
};

export default LostItemsPage;
