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
          <Link href={"/about"}>
            <Typography color="#fff" textAlign="center">
              About Us
            </Typography>
          </Link>
        ) : (
          <>
            <Link href={"/about"}>
              <Typography color="#fff" textAlign="center">
                About Us
              </Typography>
            </Link>
            <Link href={"/login"}>
              <Typography color="#fff" textAlign="center">
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
