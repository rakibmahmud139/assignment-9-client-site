"use client";

import { useGetReviewQuery } from "@/redux/features/review/reviewApi";
import { Box, Rating, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";

const Testimonials = () => {
  const { data: reviews } = useGetReviewQuery({});
  console.log(reviews?.data);

  return (
    <Box mt={16}>
      <Typography
        textAlign="center"
        component="h1"
        variant="h4"
        borderBottom={1}
        borderColor="pink"
        width={320}
        mx="auto"
      >
        <Typography component="span" color="gold" fontSize="36px">
          ***
        </Typography>
        Testimonials
        <Typography component="span" color="gold" fontSize="36px">
          ***
        </Typography>
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box className="w-64 carousel rounded-box mt-16 mb-4 ">
          {reviews?.data.map((review) => (
            <Box
              key={review.id}
              className="carousel-item w-full  bg-slate-200"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box textAlign="center" my={4}>
                {review?.user?.userProfile?.photoUrl ? (
                  <Image
                    src={review?.user?.userProfile?.photoUrl}
                    alt="user image"
                  />
                ) : (
                  <AccountCircleIcon
                    sx={{
                      fontSize: "80px",
                    }}
                  />
                )}
              </Box>
              <Box textAlign="center" mb={4}>
                <Typography mb={2}>Name: {review?.user?.name}</Typography>
                <Rating value={review?.ratting} readOnly />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
