import { Box, Typography } from "@mui/material";
import FoundItemForm from "./components/FoundItemForm";
import Heading from "@/components/shared/Heading";

const SubmitLostItemPage = () => {
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
        <Heading title="Submit Your Found Item" />
      </Box>
      <Box>
        <FoundItemForm />
      </Box>
    </Box>
  );
};

export default SubmitLostItemPage;
