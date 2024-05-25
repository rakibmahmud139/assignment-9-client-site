import { Box, Typography } from "@mui/material";
import SubmitLostItemForm from "./components/SubmitLostItemForm";

const SubmitLostItemPage = () => {
  return (
    <Box>
      <Box borderBottom={1} textAlign="center" width={500} mx="auto" my={8}>
        <Typography component="h1" variant="h4" color="#00bcd4">
          Submit Your Lost Product
        </Typography>
        <Typography>Easily report your lost items using this form</Typography>
      </Box>
      <Box>
        <SubmitLostItemForm />
      </Box>
    </Box>
  );
};

export default SubmitLostItemPage;
