import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import UpdateUserForm from "./components/UpdateUserForm";

const UserUpdate = () => {
  return (
    <Box mb={32}>
      <Heading title="Update Your Profile !!" />
      <Box display="flex" justifyContent="center" alignItems="center">
        <UpdateUserForm />
      </Box>
    </Box>
  );
};

export default UserUpdate;
