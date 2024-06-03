import FoundItemCard from "@/app/(withCommonLayout)/found-item/components/FoundItemCard";
import Heading from "@/components/shared/Heading";
import { Box, Grid, TextField, Typography } from "@mui/material";
import FoundItemsCard from "./components/FoundItemsCard";

const FoundItemsPage = () => {
  return (
    <Box>
      <Heading title="Found Items List" />

      <Box mt={8}>
        <FoundItemsCard />
      </Box>
    </Box>
  );
};

export default FoundItemsPage;
