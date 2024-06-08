import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import notFoundImage from "../assets/page-not-found.svg";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={notFoundImage}
          height={600}
          width={600}
          alt="notFoundImage"
        />
      </Box>
      <Typography component="h1" variant="h4" textAlign="center" mb={6}>
        Not Found Page
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link href={"/"}>
          <Button>Go Home</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
