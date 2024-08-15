import { Box, Typography } from "@mui/material";
import FoundItemForm from "./components/FoundItemForm";

const SubmitLostItemPage = () => {
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
          Submit Your Found Items
        </Typography>
      </Box>
      <Box>
        <FoundItemForm />
      </Box>
    </Box>
  );
};

export default SubmitLostItemPage;
