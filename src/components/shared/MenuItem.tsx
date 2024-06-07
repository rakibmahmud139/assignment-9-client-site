"use client";

import { authKey } from "@/types";
import { getFromLocalStorage } from "@/utils/localStorage";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { MouseEventHandler } from "react";

type TProps = {
  handleCloseNavMenu?: MouseEventHandler<HTMLLIElement>;
};

const MenuItems = ({ handleCloseNavMenu }: TProps) => {
  const user = getFromLocalStorage(authKey);

  return (
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
      <Link href={"/about"}>
        <Typography textAlign="center">About Us</Typography>
      </Link>

      {!user && (
        <Link href={"/login"}>
          <Typography textAlign="center">Login</Typography>
        </Link>
      )}
    </MenuItem>
  );
};

export default MenuItems;
