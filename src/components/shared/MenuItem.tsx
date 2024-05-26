import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { MouseEventHandler } from "react";

type TProps = {
  handleCloseNavMenu?: MouseEventHandler<HTMLLIElement>;
};

const MenuItems = ({ handleCloseNavMenu }: TProps) => {
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
      <Link href={"/submit-lostItem"}>
        <Typography textAlign="center">Submit Lost Item</Typography>
      </Link>
      <Link href={"/submit-foundItem"}>
        <Typography textAlign="center">Submit Found Item</Typography>
      </Link>
      <Link href={"/login"}>
        <Typography textAlign="center">Login</Typography>
      </Link>
      <Link href={"/register"}>
        <Typography textAlign="center">Register</Typography>
      </Link>
    </MenuItem>
  );
};

export default MenuItems;
