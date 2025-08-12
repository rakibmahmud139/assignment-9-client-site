"use client";

import ShimmerButton from "@/components/ui/Button";
import SpotlightCard from "@/components/ui/spotlightcard";
import { useGetFoundItemQuery } from "@/redux/features/foundItem/foundItemApi";
import { TFoundItem } from "@/types/common";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const RecentFoundItemsCard = () => {
  const { data: foundItems, isLoading } = useGetFoundItemQuery({});

  const getDate = (dateTime: string) => {
    const onlyDate = new Date(dateTime).toISOString().split("T")[0];
    return onlyDate;
  };

  return (
    <Box>
      {!isLoading && (
        <Grid container spacing={12}>
          {foundItems?.data?.slice(0, 4).map((lostItem: TFoundItem) => (
            <Grid key={lostItem?.id} item md={6} lg={3} sm={6} xs={12}>
              <SpotlightCard>
                <div className="border border-[#eee] rounded-[20px] w-full max-w-[303px] h-[422px] group cursor-pointer overflow-hidden mx-auto">
                  {/* Image container with overlay */}
                  <div className="relative h-[303px] w-[303px] border-b border-[#eee] bg-[#eee] overflow-hidden">
                    <img
                      src={lostItem?.photo || "/placeholder.svg"}
                      alt="item picture"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover overlay that slides up from bottom */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pink-200/90 via-pink-300/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <div className="text-white space-y-3">
                        <div className="flex justify-center w-full items-center">
                          <Link href={`/found-item/${lostItem?.id}`}>
                            <ShimmerButton buttonTitle="Details" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Original details section - still visible */}
                  <div className="p-[20px]">
                    <div className="flex justify-between text-[13px] text-[#777] font-quicksand">
                      <p>{lostItem?.category?.name}</p>
                      <p>{getDate(lostItem?.date)}</p>
                    </div>
                    <h2 className="text-[16px] font-quicksand text-[#3d4750] font-bold">
                      {lostItem?.foundItemName}
                    </h2>
                    <div className="flex justify-between">
                      <p className="font-quicksand font-bold text-[16px] text-[#686e7d]">
                        {lostItem?.contactNumber}
                      </p>
                      <p className="text-[13px] text-[#777] font-quicksand">
                        {lostItem?.user?.name}
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default RecentFoundItemsCard;
