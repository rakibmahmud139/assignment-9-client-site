"use client";

import { BarChartComponent } from "@/components/charts/BarChart";
import { PieChartComponent } from "@/components/charts/PieChart";
import { useGetMetaDataQuery } from "@/redux/features/meta/metaApi";
import { Stack } from "@mui/material";
import UserManagementTable from "../user-management/components/UserManagementTable";

const MetricsData = () => {
  const { data } = useGetMetaDataQuery({});

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
          <div className="stat bg-gray-500 p-4">
            <div className="stat-title text-white">Users</div>
            <div className="stat-value  text-white">
              Total: {data?.data[0]?.totalUsers}
            </div>
          </div>
        </div>

        <div className="stats shadow-2xl ">
          <div className="stat bg-pink-200 shadow-2xl shadow-slate-800">
            <div className="stat-title text-gray-600 ">Lost Items</div>
            <div className="stat-value text-gray-600">
              Total: {data?.data[0]?.totalLostItems}
            </div>
          </div>
        </div>

        <div className="stats shadow ">
          <div className="stat  bg-purple-200 shadow-2xl shadow-slate-800">
            <div className="stat-title  text-gray-600">Found Items</div>
            <div className="stat-value  text-gray-600">
              Total: {data?.data[0]?.totalFoundItems}
            </div>
          </div>
        </div>

        <div className="stats shadow ">
          <div className="stat bg-sky-200 shadow-2xl shadow-slate-800">
            <div className="stat-title  text-gray-600">Claim Items</div>
            <div className="stat-value text-gray-600">
              Total: {data?.data[0]?.totalClaimItems}
            </div>
          </div>
        </div>
      </Stack>

      <div className="flex justify-between">
        {/* //bar chart */}
        <BarChartComponent data={data?.data} />

        <div className="w-96 h-96 mt-16">
          <UserManagementTable />
        </div>

        {/* pie chart */}
        <PieChartComponent data={data?.data} />
      </div>
    </div>
  );
};

export default MetricsData;
