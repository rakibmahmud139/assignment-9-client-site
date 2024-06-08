import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import FoundItemsCard from "./components/FoundItemsCard";

const FoundItemsPage = () => {
  return (
    <Box>
      <Heading title="Found Items" />

      <Box mt={8}>
        <FoundItemsCard />
      </Box>
    </Box>
  );
};

export default FoundItemsPage;
