"use client";

import { BarChartComponent } from "@/components/charts/BarChart";
import { PieChartComponent } from "@/components/charts/PieChart";
import Heading from "@/components/shared/Heading";
import { useGetUserMetaDataQuery } from "@/redux/features/meta/metaApi";
import { Stack } from "@mui/material";

const UserMetrics = () => {
  const { data } = useGetUserMetaDataQuery({});
  console.log(data);

  return (
    <div>
      <Stack
        direction={{
          md: "row",
          xs: "column",
        }}
        justifyContent="space-between"
        gap={4}
      >
        <div className="stats shadow-2xl ">
          <div className="stat bg-pink-200 shadow-2xl shadow-slate-800">
            <div className="stat-title text-gray-600 ">Lost Items</div>
            <div className="stat-value text-gray-600">
              Total: {data?.data[0]?.totalLostItems}
            </div>
          </div>
        </div>

        <div className="stats shadow-2xl ">
          <div className="stat  bg-purple-200 shadow-2xl shadow-slate-800">
            <div className="stat-title  text-gray-600">Found Items</div>
            <div className="stat-value  text-gray-600">
              Total: {data?.data[0]?.totalFoundItems}
            </div>
          </div>
        </div>

        <div className="stats shadow-2xl ">
          <div className="stat bg-sky-200 shadow-2xl shadow-slate-800">
            <div className="stat-title  text-gray-600">Claim Items</div>
            <div className="stat-value text-gray-600">
              Total: {data?.data[0]?.totalClaimItems}
            </div>
          </div>
        </div>
      </Stack>
      <div className="mt-16">
        <Heading title="My Data Statics" />
        <div className="md:flex justify-between">
          <div>
            <BarChartComponent data={data?.data} />
          </div>
          <div>
            <PieChartComponent data={data?.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMetrics;
