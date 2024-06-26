import { Box, Typography } from "@mui/material";
import bgImage from "../../../assets/pexels-allecgomes-8961886.jpg";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: "100px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "gray",
          maxWidth: "500px",
          minWidth: "100px",
          maxHeight: "500px",
          minHeight: "200px",
          mx: "auto",
          p: "40px",
          borderTopLeftRadius: "150px",
          borderBottomRightRadius: "150px",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          textAlign="center"
          mb={12}
          color="#00bcd4"
        >
          Login !!
        </Typography>
        <Box>
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
