import { Box, Typography } from "@mui/material";
import SubmitLostItemForm from "./components/SubmitLostItemForm";

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
          color="#00bcd4"
        >
          Submit Your Lost Product
        </Typography>
        <Typography
          width={{
            xs: 200,
          }}
          mx="auto"
        >
          Easily report your lost items using this form
        </Typography>
      </Box>
      <Box>
        <SubmitLostItemForm />
      </Box>
    </Box>
  );
};

export default SubmitLostItemPage;
