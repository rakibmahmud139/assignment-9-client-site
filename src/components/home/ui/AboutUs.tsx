import { Box, Stack, Typography } from "@mui/material";
import imageAboutUs from "../../../assets/9318688.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Box mt={16}>
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
          About Us
          <Typography component="span" color="gold" fontSize="36px">
            ***
          </Typography>
        </Typography>
      </Box>

      <Stack direction="row" justifyItems="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" color="navy" mb={2}>
            Purpose and Mission
          </Typography>
          <Typography width="50%">
            At Lost and Found, our mission is to help people reunite with their
            lost belongings quickly and efficiently. We understand the
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
  );
};

export default AboutUs;