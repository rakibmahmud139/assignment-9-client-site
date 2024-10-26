import { Box, Typography } from "@mui/material";
import FoundItemCard from "./components/FoundItemCard";
import Heading from "@/components/shared/Heading";

const FoundItemPage = () => {
  return (
    <Box>
      <Box
      // borderBottom={1}
      // textAlign="center"
      // width={{
      //   md: 500,
      //   xs: 350,
      // }}
      // mx="auto"
      // my={8}
      >
        <Heading title="Claim Your Item" />
      </Box>
      <FoundItemCard />
    </Box>
  );
};

export default FoundItemPage;
