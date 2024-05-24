import AboutUs from "@/components/home/ui/AboutUs";
import HeroSection from "@/components/home/ui/HeroSection";
import ResentLostItem from "@/components/home/ui/ResentLostItem";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <AboutUs />
      <ResentLostItem />
    </Box>
  );
}
