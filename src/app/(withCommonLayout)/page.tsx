import Carousel from "@/components/carousel/Carousel";
import AboutUs from "@/components/charts/ui/AboutUs";
import ExploreSection from "@/components/charts/ui/CommingSoon";
import ContactUs from "@/components/charts/ui/ContactUs";
import ResentLostItem from "@/components/charts/ui/ResentLostItem";
import Testimonials from "@/components/charts/ui/Testimonials";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Carousel />
      <ExploreSection />
      <AboutUs />
      <ResentLostItem />
      <Testimonials />
      <ContactUs />
    </Box>
  );
}
