import { Box } from "@mui/material";
import UserDetails from "./components/Userdetails";
import UserMetrics from "./components/UserMetrix";

const UserPage = () => {
  return (
    <Box mb={36}>
      <UserMetrics />
    </Box>
  );
};

export default UserPage;
