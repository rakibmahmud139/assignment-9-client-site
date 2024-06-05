import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import MyLostItemCard from "./components/MyLostItemCard";

const MyLostItemPage = () => {
  return (
    <Box>
      <Heading title="My Lost Items" />

      <Box mt={8}>
        <MyLostItemCard />
      </Box>
    </Box>
  );
};

export default MyLostItemPage;
