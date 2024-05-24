import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import image1 from "../../../assets/4966447.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundImage: `url(${image1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        pt: "140px",
        pb: "200px",
        pl: "40px",
      }}
    >
      <Typography mt={2} component="h1" variant="h3" color="blue">
        Found Something?
      </Typography>
      <Typography my={2} component="h1" variant="h4">
        Help Others Reclaim
      </Typography>
      <Typography component="h1" variant="h4">
        Their Lost Items!
      </Typography>
      <Box mt={8}>
        <Link href="/lost-item">
          <Button
            sx={{
              mr: "16px",
            }}
          >
            Report a Lost Item
          </Button>
        </Link>
        <Link href="/found-item">
          <Button variant="outlined">Report a Found Item</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeroSection;
