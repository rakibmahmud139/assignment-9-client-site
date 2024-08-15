import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Box, Container } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(203, 228, 222)",
      }}
    >
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
}
