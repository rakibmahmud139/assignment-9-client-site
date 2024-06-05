"use client";

import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Link from "next/link";

const UserDetails = () => {
  const { data: myProfile } = useGetMyProfileQuery({});

  console.log(myProfile);
  return (
    <Box>
      <Box
        position="relative"
        right={-900}
        top={40}
        bgcolor="white"
        width="32px"
        borderRadius={48}
        pl={1}
        pr={1}
      >
        <Link href={"user/update-user"}>
          <ModeEditIcon />
        </Link>
      </Box>
      <Stack
        direction="row"
        gap={8}
        justifyContent="center"
        alignItems="center"
        bgcolor="pink"
        borderRadius={6}
        width="50%"
        mx="auto"
        p={8}
        boxShadow={16}
      >
        <Box>
          {myProfile?.data?.photoUrl ? (
            <Image
              src={myProfile?.data?.photoUrl}
              alt="profile"
              width={96}
              height={96}
            />
          ) : (
            <Avatar
              sx={{ width: 96, height: 96, mb: 4 }}
              src="/broken-image.jpg"
            />
          )}
          <Typography>{myProfile?.data?.bio}</Typography>
        </Box>
        <Box>
          <Typography variant="h3" mb={4}>
            {myProfile?.data?.user?.name}
          </Typography>
          <Typography fontStyle="oblique">
            Role :<Typography>{myProfile?.data?.user?.role}</Typography>
          </Typography>
          <Typography fontStyle="oblique" mt={2}>
            Email :<Typography>{myProfile?.data?.user?.email}</Typography>
          </Typography>
          <Typography fontStyle="oblique" mt={2}>
            Age :<Typography>{myProfile?.data?.age}</Typography>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default UserDetails;
