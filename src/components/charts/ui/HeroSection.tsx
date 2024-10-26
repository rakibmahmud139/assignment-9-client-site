import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import banner from "../../../assets/afro-man-with-magnifying-glass-removebg-preview.png";
import Navbar from "@/components/shared/Navbar";

const HeroHeaderShape1 = () => (
  <svg
    className="absolute left-0 top-0 -z-10"
    width="168"
    height="213"
    viewBox="0 0 168 213"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="62" cy="106.602" r="106" fill="#DAF3F3" fillOpacity="0.14" />
  </svg>
);

const HeroHeaderShape2 = () => (
  <svg
    className="absolute right-0 bottom-0 -z-10"
    width="385"
    height="539"
    viewBox="0 0 385 539"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M56 538.602C81.3333 435.923 192.8 230.774 436 231.604"
      stroke="white"
      strokeOpacity="0.7"
      strokeWidth="2"
    />
    <path
      d="M45 492.602C70.3333 389.923 181.8 184.774 425 185.604"
      stroke="white"
      strokeOpacity="0.7"
      strokeWidth="2"
    />
    <path
      d="M34 446.602C59.3333 343.923 170.8 138.774 414 139.604"
      stroke="white"
      strokeOpacity="0.7"
      strokeWidth="2"
    />
    <path
      d="M23 400.602C48.3333 297.923 159.8 92.7743 403 93.6041"
      stroke="white"
      strokeOpacity="0.7"
      strokeWidth="2"
    />
    <path
      d="M12 354.602C37.3333 251.923 148.8 46.7743 392 47.6041"
      stroke="white"
      strokeOpacity="0.7"
      strokeWidth="2"
    />
    <path
      d="M1 308.602C26.3333 205.923 137.8 0.774349 381 1.60407"
      stroke="white"
      strokeOpacity="0.7"
      strokeWidth="2"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <div className="ezy__header12 light bg-blue-600 text-white relative z-10">
      <HeroHeaderShape1 />
      <HeroHeaderShape2 />

      <div>
        <div className="container px-4 mx-auto relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6 pe-xl-5 text-center lg:text-start">
              <div className="flex flex-col justify-center h-[220px] px-5">
                <h2 className="text-3xl pt-24 md:pt-64 font-bold md:text-[56px] leading-none mb-6">
                  Found Something?
                </h2>
                <p className="text-[22px] leading-normal">
                  Help Others Reclaim Their Lost Items!
                </p>
                <div>
                  <a
                    href="/submit-lostItem"
                    className="bg-white text-black shadow-xl rounded-lg py-3 px-8 text-xl mt-6 md:mt-12 inline-block"
                  >
                    Report Lost Item
                  </a>
                  <a
                    href="/submit-foundItem"
                    className="bg-[#239FA4] ml-5 text-white shadow-xl rounded-lg py-3 px-8 text-xl mt-6 md:mt-12 inline-block"
                  >
                    Report Found Item
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 text-center lg:text-start">
              <img
                src={banner.src}
                alt=""
                className="rounded max-w-full h-[520px] mt-4 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
