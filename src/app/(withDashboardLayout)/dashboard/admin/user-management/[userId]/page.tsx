import { Box, Typography } from "@mui/material";
import UserUpdateForm from "./components/UserUpdateForm";

type TProps = {
  userId: string;
};

const UpdateUser = ({ params }: { params: TProps }) => {
  return (
    <Box>
      <Box mb={8}>
        <Typography
          textAlign="center"
          component="h1"
          variant="h4"
          borderBottom={1}
          width={420}
          mx="auto"
        >
          <Typography component="span" color="gold" fontSize="36px">
            ***
          </Typography>
          Update User Info
          <Typography component="span" color="gold" fontSize="36px">
            ***
          </Typography>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <UserUpdateForm id={params?.userId} />
      </Box>
    </Box>
  );
};

export default UpdateUser;
