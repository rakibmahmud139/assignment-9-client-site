import { Box, Typography } from "@mui/material";
import FoundItemCard from "./components/FoundItemCard";

const FoundItemPage = () => {
  return (
    <Box>
      <Box
        borderBottom={1}
        textAlign="center"
        width={{
          md: 500,
          xs: 350,
        }}
        mx="auto"
        my={8}
      >
        <Typography
          component="h1"
          fontSize={{
            md: "36px",
            xs: "20px",
          }}
          color="#F97300"
        >
          Claim Your Item
        </Typography>
      </Box>
      <FoundItemCard />
    </Box>
  );
};

export default FoundItemPage;
