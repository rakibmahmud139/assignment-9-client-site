import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import logo from "../../assets/lost--found-high-resolution-logo-transparent.png";
import Image from "next/image";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(55, 57, 57, 0.14)",
        clipPath: "polygon(0 0, 100%,0, 100% 100%, 0 75%)",
        px: "28px",
        pt: "48px",
        pb: "12px",
        boxShadow: "unset",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Image src={logo} alt="logo" width={100} height={100} />
          <Typography color="main" fontSize="40px">
            sale&found
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "40px",
          }}
        >
          <FacebookIcon
            sx={{
              fontSize: "40px",
              color: "blue",
            }}
          />
          <YouTubeIcon
            sx={{
              fontSize: "40px",
              color: "red",
            }}
          />
          <XIcon
            sx={{
              fontSize: "40px",
            }}
          />
        </Box>
      </Stack>
      <Typography
        color="rgba(143, 57, 0, 0.55)"
        fontSize="28px"
        textAlign="center"
      >
        sale&found@web.com
      </Typography>
      <Typography textAlign="center">
        © 2024 Lost & Found, Inc. All rights reserved.
      </Typography>
      <Typography textAlign="center">Terms of Use, Privacy Policy</Typography>
    </Box>
  );
};

export default Footer;
