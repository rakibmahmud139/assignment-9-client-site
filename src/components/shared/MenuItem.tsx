"use client";

import { Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { MouseEventHandler } from "react";

type TProps = {
  handleCloseNavMenu?: MouseEventHandler<HTMLLIElement>;
  token: string | null;
};

const MenuItems = ({ handleCloseNavMenu, token }: TProps) => {
  return (
    <Box>
      <MenuItem
        onClick={handleCloseNavMenu}
        sx={{
          gap: {
            md: 5,
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
          display: {
            xs: "flex",
          },
        }}
      >
        {token ? (
          <>
            <Link href={"/lost-items"}>
              <Typography color="white" textAlign="center">
                Lost Item
              </Typography>
            </Link>
            <Link href={"/found-item"}>
              <Typography color="white" textAlign="center">
                Found Item
              </Typography>
            </Link>
            <Link href={"/about"}>
              <Typography color="white" textAlign="center">
                About Us
              </Typography>
            </Link>
          </>
        ) : (
          <>
            <Link href={"/lost-items"}>
              <Typography color="white" textAlign="center">
                Lost Item
              </Typography>
            </Link>
            <Link href={"/found-item"}>
              <Typography color="white" textAlign="center">
                Found Item
              </Typography>
            </Link>
            <Link href={"/about"}>
              <Typography color="white" textAlign="center">
                About Us
              </Typography>
            </Link>
            <Link href={"/login"}>
              <Typography color="white" textAlign="center">
                Login
              </Typography>
            </Link>
          </>
        )}
      </MenuItem>
    </Box>
  );
};

export default MenuItems;
