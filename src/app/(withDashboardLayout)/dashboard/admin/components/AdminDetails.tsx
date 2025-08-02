"use client";

import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Heading from "@/components/shared/Heading";
import RecentMyLostItem from "../../user/components/RecentMyLostItem";
import RecentMyFoundItem from "../../user/components/RecentMyFoundItem";

const AdminDetails = () => {
  const { data: myProfile } = useGetMyProfileQuery({});

  return (
    <Box>
      <div className="bg-pink-50 p-4 rounded-md shadow-xl">
        <Box sx={{ display: { md: "flex", gap: 36 } }}>
          <div className="rounded-md w-36">
            <img src={myProfile?.data?.photoUrl} alt="" className="w-36 h-36" />
          </div>
          <div>
            <div>
              <div className="xl:flex gap-96">
                <div>
                  <h1 className="text-black font-[500px] text-[20px] my-2 md:my-0 ">
                    {myProfile?.data?.user?.name}
                  </h1>
                </div>
                <Box sx={{ display: "flex", gap: 4 }}>
                  <Link href={"/update-user"}>
                    <button className="py-1 bg-[#32c2c7] text-white rounded-md w-24">
                      Edit Profile
                    </button>
                  </Link>
                  <Link href={"/change-password"}>
                    <button className="py-1 px-2 bg-[#3b67c6] text-white rounded-md ">
                      Change Password
                    </button>
                  </Link>
                </Box>
              </div>
              <p className="bg-fuchsia-200 text-black p-1 w-12 text-center rounded mt-2 xl:mt-0">
                {myProfile?.data?.user?.role}
              </p>
              <p className="mt-6 text-black">
                <EmailRoundedIcon sx={{ mr: 1 }} />
                {myProfile?.data?.user?.email}
              </p>
              <p className="mt-1 text-black">Age: {myProfile?.data?.age}</p>
            </div>
          </div>
        </Box>
        <p className="mt-6 text-black">{myProfile?.data?.bio}</p>
      </div>
      <div className="lg:flex gap-6 justify-between">
        <div className="lg:w-[50%] h-96 mt-16">
          <Heading title="Recent Lost Item" />
          <RecentMyLostItem />
        </div>
        <div className="lg:w-[50%] md:mt-16 mt-8">
          <Heading title="Recent Found Item" />
          <RecentMyFoundItem />
        </div>
      </div>
    </Box>
  );
};

export default AdminDetails;
