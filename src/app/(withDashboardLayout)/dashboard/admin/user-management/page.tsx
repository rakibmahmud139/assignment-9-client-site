import { Box, Typography } from "@mui/material";
import UserManagementTable from "./components/UserManagementTable";
import Heading from "@/components/shared/Heading";

const UserManagement = () => {
  return (
    <Box>
      <Box mb={8}>
        <Heading title="All User" />
      </Box>

      <Box>
        <UserManagementTable />
      </Box>
    </Box>
  );
};

export default UserManagement;
