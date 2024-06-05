import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import MyFoundItemCard from "./components/MyFoundItemCard";

const MyFoundItemPage = () => {
  return (
    <Box>
      <Heading title="My Found Items" />

      <Box mt={8}>
        <MyFoundItemCard />
      </Box>
    </Box>
  );
};

export default MyFoundItemPage;
