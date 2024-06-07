"use client";

import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Link from "next/link";

const UserDetails = () => {
  const { data: myProfile } = useGetMyProfileQuery({});

  return (
    <Box>
      <Box
        position="relative"
        right={-864}
        top={40}
        bgcolor="white"
        width="32px"
        borderRadius={48}
        textAlign="center"
        pl={1}
        pr={1}
      >
        <Link href={"user/update-user"}>
          <ModeEditIcon />
        </Link>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        bgcolor="pink"
        borderRadius={6}
        width="50%"
        mx="auto"
        p={4}
        boxShadow={16}
      >
        <Box>
          <Avatar
            alt={myProfile?.data?.user?.name}
            src={myProfile?.data?.photoUrl}
            sx={{ width: 120, height: 120, mb: "32px" }}
          />

          <Typography width="50%">{myProfile?.data?.bio}</Typography>
        </Box>
        <Box>
          <Typography component="h1" variant="h4" mb={4}>
            {myProfile?.data?.user?.name}
          </Typography>
          <Typography fontStyle="oblique">
            Role :
            <Typography component="span">
              {myProfile?.data?.user?.role}
            </Typography>
          </Typography>
          <Typography fontStyle="oblique" mt={2}>
            Email :
            <Typography component="span">
              {myProfile?.data?.user?.email}
            </Typography>
          </Typography>
          <Typography fontStyle="oblique" mt={2}>
            Age :
            <Typography component="span">{myProfile?.data?.age}</Typography>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default UserDetails;
