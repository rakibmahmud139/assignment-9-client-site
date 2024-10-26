import AboutUs from "@/components/charts/ui/AboutUs";
import CommingSoon from "@/components/charts/ui/CommingSoon";
import ContactUs from "@/components/charts/ui/ContactUs";
import HeroSection from "@/components/charts/ui/HeroSection";
import ResentLostItem from "@/components/charts/ui/ResentLostItem";
import Testimonials from "@/components/charts/ui/Testimonials";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <CommingSoon />
      <AboutUs />
      <ResentLostItem />
      <Testimonials />
      <ContactUs />
    </Box>
  );
}
