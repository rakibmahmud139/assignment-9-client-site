import AboutUs from "@/components/shared/ui/home/AboutUs";
import HeroSection from "@/components/shared/ui/home/HeroSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <AboutUs />
    </Box>
  );
}
