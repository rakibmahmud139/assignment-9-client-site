import { Box, Container, Stack, Typography } from "@mui/material";
import imageAboutUs from "../../../assets/9318688.jpg";
import Image from "next/image";
import Heading from "@/components/shared/Heading";

const AboutUs = () => {
  return (
    <Container>
      <Box mt={8}>
        <Box mb={8}>
          <Heading title="About US" />
        </Box>

        <Stack
          direction={{ md: "row", xs: "column-reverse" }}
          justifyItems="space-between"
          gap={6}
          alignItems="center"
        >
          <Box>
            <Typography
              component="h1"
              variant="h4"
              color="navy"
              mb={2}
              pl={1}
              borderLeft={8}
              borderColor="rosybrown"
            >
              Purpose and Mission
            </Typography>
            <Typography width="75%">
              At Lost and Found, our mission is to help people reunite with
              their lost belongings quickly and efficiently. We understand the
              frustration and stress that comes with losing valuable items,
              whether it&apos;s a cherished piece of jewelry, an important
              document, or a favorite gadget.
            </Typography>
          </Box>
          <Box>
            <Image src={imageAboutUs} alt="aboutUs" width={900} height={900} />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutUs;
