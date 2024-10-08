import Heading from "@/components/shared/Heading";
import { Box, Container } from "@mui/material";
import AllLostItemCard from "./components/AllLoastItemCard";

const AllLostItemPage = () => {
  return (
    <Box mb={16} mt={8}>
      <Heading title="All Lost Items" />
      <Container>
        <AllLostItemCard />
      </Container>
    </Box>
  );
};

export default AllLostItemPage;
