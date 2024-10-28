"use client";

import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Link from "next/link";
import RecentMyLostItem from "./RecentMyLostItem";
import Heading from "@/components/shared/Heading";

const UserDetails = () => {
  const { data: myProfile } = useGetMyProfileQuery({});

  console.log(myProfile);

  return (
    <Box>
      <div className="bg-pink-50 p-4 rounded-md shadow-xl">
        <Box sx={{ display: { md: "flex", gap: 36 } }}>
          <div className="bg-gray-200 rounded-md w-36">
            <img src={myProfile?.data?.photoUrl} alt="" className="w-36 h-36" />
          </div>
          <div>
            <div>
              <Box sx={{ display: "flex", gap: 100 }}>
                <div>
                  <h1 className="text-black font-[500px] text-[20px] ">
                    {myProfile?.data?.user?.name}
                  </h1>
                </div>
                <Box>
                  <Link href={"/update-user"}>
                    <button className="py-1 bg-[#32c2c7] text-white rounded-md w-24">
                      Edit Profile
                    </button>
                  </Link>
                </Box>
              </Box>
              <p className="bg-fuchsia-100 p-1 w-12 text-center rounded">
                {myProfile?.data?.user?.role}
              </p>
              <p className="mt-6">
                <EmailRoundedIcon sx={{ mr: 1 }} />
                {myProfile?.data?.user?.email}
              </p>
              <p className="mt-1">Age: {myProfile?.data?.age}</p>
            </div>
          </div>
        </Box>
        <p className="mt-6">{myProfile?.data?.bio}</p>
      </div>
      <div className="w-96 h-96 mt-16">
        <Heading title="Recent My Lost Item" />
        <RecentMyLostItem email={myProfile?.data?.user?.email} />
      </div>
    </Box>
  );
};

export default UserDetails;
