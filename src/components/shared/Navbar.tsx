"use client";

import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import logo from "../../assets/lost--found-high-resolution-logo-transparent.png";
import MenuItems from "./MenuItem";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const { data: user } = useGetMyProfileQuery({});

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      position="static"
      sx={{
        background: "#f4f7fe",
      }}
      borderBottom={1}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={"/"}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <Image src={logo} alt="logo" width={80} height={80} />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItems handleCloseNavMenu={handleCloseNavMenu} user={user} />
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image src={logo} alt="logo" width={60} height={60} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-around",
              },
            }}
          >
            <MenuItems user={user} />
          </Box>

          {user?.data?.user?.role && (
            <Box sx={{ flexGrow: 0 }}>
              <Link href={`/dashboard/${user?.data?.user?.role}`}>
                <Typography>My Profile</Typography>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </Box>
  );
}
export default Navbar;
