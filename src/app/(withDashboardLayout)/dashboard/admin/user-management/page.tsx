import { Box, Typography } from "@mui/material";
import UserManagementTable from "./components/UserManagementTable";

const UserManagement = () => {
  return (
    <Box>
      <Box mb={8}>
        <Typography
          textAlign="center"
          component="h1"
          variant="h4"
          borderBottom={1}
          width={320}
          mx="auto"
        >
          <Typography component="span" color="gold" fontSize="36px">
            ***
          </Typography>
          All User
          <Typography component="span" color="gold" fontSize="36px">
            ***
          </Typography>
        </Typography>
      </Box>

      <Box>
        <UserManagementTable />
      </Box>
    </Box>
  );
};

export default UserManagement;
