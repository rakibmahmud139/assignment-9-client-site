import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import image1 from "../../../assets/photo-1626010448982-0fec79ed1979.avif";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: "400px",
          md: "500px",
        },
        backgroundImage: `url(${image1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(4px)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.60)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          textAlign: {
            xs: "center",
            md: "left",
          },
          px: {
            xs: 2,
            md: 6,
          },
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          color="linear-gradient(90deg, #FF6584, #FF8C00)"
        >
          Found Something?
        </Typography>
        <Typography my={2} component="h1" variant="h4" color="#F97300">
          Help Others Reclaim
        </Typography>
        <Typography component="h1" variant="h4" color="#F97300">
          Their Lost Items!
        </Typography>
        <Stack
          mt={4}
          gap={2}
          direction={{
            md: "row",
            xs: "column",
          }}
          width={{
            xs: "100%",
            md: "auto",
          }}
          justifyContent={{
            xs: "center",
            md: "flex-start",
          }}
        >
          <Link href="/submit-lostItem">
            <Button
              sx={{
                backgroundColor: "#673ab7",
                width: {
                  xs: "100%",
                  md: "208px",
                },
              }}
            >
              Report Lost Item
            </Button>
          </Link>
          <Link href="/submit-foundItem">
            <Button
              sx={{
                backgroundColor: "#009688",
                width: {
                  xs: "100%",
                  md: "208px",
                },
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
