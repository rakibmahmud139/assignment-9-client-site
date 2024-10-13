import AboutUs from "@/components/home/ui/AboutUs";
import CommingSoon from "@/components/home/ui/CommingSoon";
import ContactUs from "@/components/home/ui/ContactUs";
import HeroSection from "@/components/home/ui/HeroSection";
import ResentLostItem from "@/components/home/ui/ResentLostItem";
import Testimonials from "@/components/home/ui/Testimonials";
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
