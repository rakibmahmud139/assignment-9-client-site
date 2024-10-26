import { Box, Container, Stack, Typography } from "@mui/material";
import imageAboutUs from "../../../assets/9318688.jpg";
import Image from "next/image";
import Heading from "@/components/shared/Heading";

const AboutUs = () => {
  return (
    <Box mx={12} mt={8}>
      <Heading title="About Us" />

      <Box
        sx={{
          display: { md: "flex" },
          alignItems: { md: "center" },
          gap: 20,
        }}
      >
        <Box>
          <Typography
            component="h1"
            variant="h4"
            color="#32c2c7"
            mb={2}
            pl={1}
            borderLeft={8}
            borderColor="rosybrown"
          >
            Purpose and Mission
          </Typography>
          <Typography>
            The primary purpose of a Lost and Found Items project is to
            facilitate the efficient recovery of lost belongings and reunite
            them with their rightful owners, minimizing inconvenience and
            distress. The mission is to create a centralized platform for
            collecting, categorizing, and storing information about lost and
            found items, enhance communication between individuals, implement
            efficient processes for item retrieval and return, reduce
            environmental impact by minimizing disposal, and foster community
            spirit by helping people recover their belongings.
          </Typography>
        </Box>

        <Image src={imageAboutUs} alt="aboutUs" width={400} height={400} />
      </Box>
    </Box>
  );
};

export default AboutUs;
