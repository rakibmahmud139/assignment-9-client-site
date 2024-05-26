import { Box, Typography } from "@mui/material";
import FoundItemCard from "./components/FoundItemCard";

const FoundItemPage = () => {
  return (
    <Box>
      <Box borderBottom={1} textAlign="center" width={600} mx="auto" my={8}>
        <Typography component="h1" variant="h4" color="#00bcd4">
          You Can Claim Your Item From Here
        </Typography>
      </Box>
      <FoundItemCard />
    </Box>
  );
};

export default FoundItemPage;
