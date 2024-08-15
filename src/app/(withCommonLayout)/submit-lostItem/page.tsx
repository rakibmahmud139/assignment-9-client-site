import { Box, Typography } from "@mui/material";
import SubmitLostItemForm from "./components/SubmitLostItemForm";

const SubmitLostItemPage = () => {
  return (
    <Box mb={8}>
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
          Submit Your Lost Product
        </Typography>
      </Box>
      <Box>
        <SubmitLostItemForm />
      </Box>
    </Box>
  );
};

export default SubmitLostItemPage;
