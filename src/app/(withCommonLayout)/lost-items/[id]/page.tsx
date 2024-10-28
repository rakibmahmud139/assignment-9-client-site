"use client";

import ClaimModal from "@/components/claimModal/ClaimModal";
import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import { useGetSingleLostItemQuery } from "@/redux/features/lostItem/lostItemApi";
import { useGiveReviewMutation } from "@/redux/features/review/reviewApi";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Container, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LostItemDetails = ({ params }: { params: { id: string } }) => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<number | null>(0);

  const { data } = useGetSingleLostItemQuery(params.id);
  const [createReview] = useGiveReviewMutation();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-CA");
  };
  const handleSubmit = async (data: FieldValues) => {
    const resData = {
      tips: data.tips,
      lostItemId: params.id,
      ratting: value,
    };

    const res = await createReview(resData).unwrap();

    if (res?.success) {
      toast.success("Submit Your Review Successfully");
    }
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ mx: 24, my: 6 }}>
        <Box sx={{ display: { md: "flex" }, gap: 28 }}>
          <div className="bg-gray-200 rounded-md">
            <Image
              src={data?.data?.photo}
              alt="found item image"
              width={400}
              height={384}
              className="rounded-md"
            />
          </div>
          <Box>
            <h1 className="text-black font-[500px] text-[35px] ">
              {data?.data?.lostItemName}
            </h1>
            <div className="md:flex gap-4 mt-3">
              <p className="bg-gray-200 py-2 px-2 text-black rounded-md">
                <LocationOnIcon /> {data?.data?.location}
              </p>
              <p
                className={`bg-gray-400 py-2 px-2 ${
                  data?.data?.found ? "bg-green-300" : "bg-red-300"
                } rounded-md`}
              >
                {data?.data?.found ? "Found" : "Not Found"}
              </p>
            </div>
            <div className="md:flex gap-4 mt-3">
              <p>
                <CategoryRoundedIcon sx={{ mr: 1 }} />
                {data?.data?.category?.name}
              </p>
              <p>
                <CalendarMonthRoundedIcon sx={{ mr: 1 }} />
                {formatDate(data?.data?.date)}
              </p>
            </div>
            <Box sx={{ mt: 6 }}>
              <h1 className="text-[#32c2c7] font-[500px] text-[28px] border-b-2 w-48 pb-1 border-[#32c2c7]">
                User Information
              </h1>
              <h1 className="mt-4 text-black font-[500px] text-[20px]">
                Name : {data?.data?.user?.name}
              </h1>
              <p className="mt-2 text-black">
                Email : {data?.data?.user?.email}
              </p>
            </Box>
            <Box>
              <button
                onClick={() => setIsOpenModal(true)}
                className="mt-6  py-1 bg-[#32c2c7] text-white rounded-md w-40"
              >
                CLAIM
              </button>
            </Box>
            <ClaimModal
              open={isOpenModal}
              setOpen={setIsOpenModal}
              lostItemId={data?.data?.id}
            />
          </Box>
        </Box>
        <Box sx={{ mt: 12 }}>
          <h1 className=" font-[500px] text-[28px] border-b-2 pb-1 border-[#32c2c7] w-36 text-[#32c2c7]">
            Description
          </h1>
          <p className="mt-4 text-black">{data?.data?.description}</p>
        </Box>
        <Box sx={{ mt: 8 }}>
          <h1 className=" font-[500px] text-[28px] border-b-2 pb-1 border-[#32c2c7] w-52 text-[#32c2c7]">
            Write Your Review
          </h1>
          <Box>
            <FLForms onSubmit={handleSubmit}>
              <Typography mb={2} mt={4} component="legend">
                Your Review*
              </Typography>
              <FLInput name="tips" required />
              <Box sx={{ mt: 3 }}>
                <Typography mb={2} component="legend">
                  Your Ratings*
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
              <Box>
                <button className="mt-6 py-1 bg-[#32c2c7] text-white rounded-md w-20">
                  Submit
                </button>
              </Box>
            </FLForms>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LostItemDetails;
