import { Box, Typography } from "@mui/material";
import FoundItemForm from "./components/FoundItemForm";
import Heading from "@/components/shared/Heading";

const SubmitLostItemPage = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Box>
        <Heading title="Submit Your Found Item" />
      </Box>
      <Box>
        <FoundItemForm />
      </Box>
    </Box>
  );
};

export default SubmitLostItemPage;
