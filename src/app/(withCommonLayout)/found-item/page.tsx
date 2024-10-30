import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import FoundItemCard from "./components/FoundItemCard";

const FoundItemPage = () => {
  return (
    <Box mt={3}>
      <Box>
        <Heading title="All Found Item" />
      </Box>
      <FoundItemCard />
    </Box>
  );
};

export default FoundItemPage;
