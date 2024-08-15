import Heading from "@/components/shared/Heading";
import { Box, Container } from "@mui/material";
import LostItemCard from "./LostItemCard";

const ResentLostItem = () => {
  return (
    <Box mt={16}>
      <Box mb={8}>
        <Heading title="Recent LostItem" />
        <Container>
          <LostItemCard />
        </Container>
      </Box>
    </Box>
  );
};

export default ResentLostItem;
