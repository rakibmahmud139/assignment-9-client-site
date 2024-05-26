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
        backgroundColor: "#f4f7fe",
      }}
    >
      <Container>
        <Navbar />
        <Box my={2}>{children}</Box>
        <Footer />
      </Container>
    </Box>
  );
}
