"use client";

import Heading from "@/components/shared/Heading";
import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Box } from "@mui/material";
import Link from "next/link";
import RecentMyFoundItem from "./RecentMyFoundItem";
import RecentMyLostItem from "./RecentMyLostItem";

const UserDetails = () => {
  const { data: myProfile } = useGetMyProfileQuery({});

  return (
    <Box>
      <div className="bg-pink-50 p-4 rounded-md shadow-xl">
        <Box sx={{ display: { md: "flex", gap: 36 } }}>
          <div className="bg-gray-200 rounded-md w-36">
            <img src={myProfile?.data?.photoUrl} alt="" className="w-36 h-36" />
          </div>
          <div>
            <div>
              <Box sx={{ display: { md: "flex" }, gap: 80 }}>
                <div>
                  <h1 className="text-black font-[500px] text-[20px] my-2 md:my-0 ">
                    {myProfile?.data?.user?.name}
                  </h1>
                </div>
                <Box sx={{ display: { md: "flex" }, gap: 4 }}>
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
              </Box>
              <p className="bg-fuchsia-200 text-black p-1 w-12 text-center rounded mt-2 md:mt-0">
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
      <div className="md:flex gap-6 justify-between">
        <div className="md:w-[50%] h-96 mt-16">
          <Heading title="Recent My Lost Item" />
          <RecentMyLostItem email={myProfile?.data?.user?.email} />
        </div>
        <div className="md:w-[50%] h-96 md:mt-16 mt-8">
          <Heading title="Recent My Found Item" />
          <RecentMyFoundItem email={myProfile?.data?.user?.email} />
        </div>
      </div>
    </Box>
  );
};

export default UserDetails;
