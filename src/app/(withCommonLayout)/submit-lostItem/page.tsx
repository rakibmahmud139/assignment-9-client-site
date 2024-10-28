import { Box, Typography } from "@mui/material";
import SubmitLostItemForm from "./components/SubmitLostItemForm";
import Heading from "@/components/shared/Heading";

const SubmitLostItemPage = () => {
  return (
    <Box mb={8} mt={4}>
      <Box>
        <Heading title="Submit Your Lost Item" />
      </Box>
      <Box>
        <SubmitLostItemForm />
      </Box>
    </Box>
  );
};

export default SubmitLostItemPage;
