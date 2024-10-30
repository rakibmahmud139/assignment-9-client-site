import { Box, Container, Typography } from "@mui/material";
import AboutCard from "./components/AboutCard";

const AboutPage = () => {
  return (
    <Container>
      <Box mb={12}>
        <Box>
          <Typography
            component="h1"
            fontSize={{
              md: "32px",
              xs: "24px",
            }}
            color="skyblue"
            mb={4}
            mt={6}
          >
            Purpose and Mission
          </Typography>
          <Typography component="p">
            Our website is dedicated to providing high-quality, reliable, and
            up-to-date information and resources on specific topic/industry. Our
            mission is to empower individuals and organizations by offering
            insightful content, expert advice, and innovative solutions to help
            them achieve their goals and stay ahead in their respective fields.
            We strive to create a community where knowledge is shared, and
            growth is fostered, ensuring that our audience is always informed
            and inspired.
          </Typography>
        </Box>
        <Box>
          <Typography
            component="h1"
            fontSize={{
              md: "32px",
              xs: "24px",
            }}
            color="skyblue"
            mb={4}
            mt={6}
          >
            Our Dedicated Team
          </Typography>
          <div className="xl:mx-0 lg:mx-0 md:mx-0 mx-4">
            <AboutCard />
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
