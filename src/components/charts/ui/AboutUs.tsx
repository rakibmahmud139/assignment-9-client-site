import { Box, Container, Stack, Typography } from "@mui/material";
import imageAboutUs from "../../../assets/9318688.jpg";
import Image from "next/image";
import Heading from "@/components/shared/Heading";
import RecentFoundItemsCard from "./ResentFoundItemCard";

const AboutUs = () => {
  return (
    <Box mx={12} mt={8}>
      <Heading title="Resent Found Item" />
      <RecentFoundItemsCard />
    </Box>
  );
};

export default AboutUs;
