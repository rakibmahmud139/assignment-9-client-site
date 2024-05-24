import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/providers/Providers";
import { Box, Container } from "@mui/material";
import Navbar from "@/components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <Box
              sx={{
                backgroundColor: "#f4f7fe",
              }}
            >
              <Container>
                <Navbar />
                <Box my={2}>
                  <Toaster position="top-center" /> {children}
                </Box>
              </Container>
              <Footer />
            </Box>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
