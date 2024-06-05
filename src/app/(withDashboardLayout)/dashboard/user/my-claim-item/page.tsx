import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import MyClaimItemCard from "./components/MyClaimItemCard";

const MyClaimItemPage = () => {
  return (
    <Box>
      <Heading title="My Claim Items" />

      <Box mt={8}>
        <MyClaimItemCard />
      </Box>
    </Box>
  );
};

export default MyClaimItemPage;
