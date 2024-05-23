import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/providers/Providers";
import { Box, Container } from "@mui/material";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <Box
              sx={{
                backgroundColor: "#f4f7fe",
              }}
            >
              <Container>
                <Navbar />
                <Box
                  sx={{
                    height: "100vh",
                  }}
                  my={2}
                >
                  {children}
                </Box>
              </Container>
            </Box>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
