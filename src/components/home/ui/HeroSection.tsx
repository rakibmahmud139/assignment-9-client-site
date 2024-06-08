import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import image1 from "../../../assets/4966447.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${image1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(4px)",
        pt: {
          xs: "80px",
          md: "140px",
        },
        pb: {
          xs: "100px",
          md: "200px",
        },
        pl: {
          xs: "20px",
          md: "40px",
        },
      }}
    >
      <Box>
        <Typography mt={2} component="h1" variant="h2" color="#ad1457">
          Found Something?
        </Typography>
        <Typography my={2} component="h1" variant="h4" color="black">
          Help Others Reclaim
        </Typography>
        <Typography component="h1" variant="h4" color="black">
          Their Lost Items!
        </Typography>
        <Stack
          mt={8}
          gap={4}
          direction={{
            md: "row",
            xs: "column",
          }}
        >
          <Link href="/submit-lostItem">
            <Button
              sx={{
                backgroundColor: "#673ab7",
                width: "208px",
              }}
            >
              Report Lost Item
            </Button>
          </Link>
          <Link href="/submit-foundItem">
            <Button
              sx={{
                backgroundColor: "#009688",
                width: "208px",
              }}
            >
              Report Found Item
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;
