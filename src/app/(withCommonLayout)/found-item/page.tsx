import { Box, Typography } from "@mui/material";
import FoundItemCard from "./components/FoundItemCard";
import Heading from "@/components/shared/Heading";

const FoundItemPage = () => {
  return (
    <Box>
      <Box textAlign="center">
        <Heading title="You Can Claim Your Item From Here" />
      </Box>
      <FoundItemCard />
    </Box>
  );
};

export default FoundItemPage;
