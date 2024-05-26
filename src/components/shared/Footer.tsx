import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import logo from "../../assets/lost--found-high-resolution-logo-transparent.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <Image src={logo} alt="logo" width={100} height={100} />
        <Typography textAlign="center" color="whitesmoke">
          Email: lost@found.com
        </Typography>
        <Typography textAlign="center" color="whitesmoke">
          © 2024 Lost & Found, Inc. All rights reserved.
        </Typography>
        <Typography textAlign="center" color="whitesmoke">
          Terms of Use, Privacy Policy
        </Typography>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/">
            <FacebookIcon
              sx={{
                fontSize: "40px",
              }}
            />
          </a>
          <a href="https://x.com/home">
            <XIcon
              sx={{
                fontSize: "40px",
              }}
            />
          </a>
          <a href="https://youtube.com/">
            <YouTubeIcon
              sx={{
                fontSize: "40px",
              }}
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
