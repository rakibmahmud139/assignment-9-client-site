"use client";

import { authKey } from "@/types";
import { getFromLocalStorage } from "@/utils/localStorage";
import { Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { MouseEventHandler } from "react";

type TProps = {
  handleCloseNavMenu?: MouseEventHandler<HTMLLIElement>;
  role?: string | null;
};

const MenuItems = ({ handleCloseNavMenu, role }: TProps) => {
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
        {role ? (
          <Link href={"/about"}>
            <Typography textAlign="center">About Us</Typography>
          </Link>
        ) : (
          <>
            <Link href={"/about"}>
              <Typography textAlign="center">About Us</Typography>
            </Link>
            <Link href={"/login"}>
              <Typography textAlign="center">Login</Typography>
            </Link>
          </>
        )}
      </MenuItem>
    </Box>
  );
};

export default MenuItems;
