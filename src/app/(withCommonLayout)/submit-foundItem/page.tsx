import { Box, Typography } from "@mui/material";
import FoundItemForm from "./components/FoundItemForm";

const SubmitLostItemPage = () => {
  return (
    <Box>
      <Box borderBottom={1} textAlign="center" width={500} mx="auto" my={8}>
        <Typography component="h1" variant="h4" color="#00bcd4">
          Submit You Found Items
        </Typography>
        <Typography>Easily submit found items using this form</Typography>
      </Box>
      <Box>
        <FoundItemForm />
      </Box>
    </Box>
  );
};

export default SubmitLostItemPage;
