"use client";

import Heading from "@/components/shared/Heading";
import { useGetReviewQuery } from "@/redux/features/review/reviewApi";
import { TUser } from "@/types";
import { Box, Typography } from "@mui/material";

import { Avatar, Card, CardContent } from "@mui/material";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

type TReview = {
  id: string;
  user: TUser;
  ratting: number;
  tips?: string;
};

const Testimonials = () => {
  const { data: reviews, isLoading } = useGetReviewQuery({});

  return (
    <Box my={8}>
      <Heading title="Testimonials" />
      {!isLoading && (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          {reviews?.data?.map((review: TReview, index: number) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: 900,
                  margin: "auto",
                  padding: 4,
                  background: "#e3f1f1",
                  borderRadius: "20px",
                  color: "#fff",
                  minHeight: 300,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        src={review?.user?.userProfile?.photoUrl}
                        sx={{
                          width: 80,
                          height: 80,
                          marginRight: 3,
                          border: "3px solid #fff",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="body1"
                        textAlign={"center"}
                        sx={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        {review?.user?.name}
                      </Typography>
                      <Typography variant="body1">
                        {review?.user?.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", marginLeft: 1, marginRight: 1 }}
                    >
                      <FaQuoteLeft size={24} color="#00FFA2" />
                      {review?.tips}
                      <FaQuoteRight size={24} color="#00FFA2" />
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    {Array(review.ratting)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} color="#FFD700" />
                      ))}
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default Testimonials;
