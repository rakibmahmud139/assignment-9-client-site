"use client";

import { BarChartComponent } from "@/components/charts/BarChart";
import { PieChartComponent } from "@/components/charts/PieChart";
import { useGetMetaDataQuery } from "@/redux/features/meta/metaApi";
import { Stack } from "@mui/material";
import UserManagementTable from "../user-management/components/UserManagementTable";
import Heading from "@/components/shared/Heading";

const MetricsData = () => {
  const { data } = useGetMetaDataQuery({});

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
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
      </div>
      <div className="mt-16">
        <Heading title="My Data Statics" />
      </div>
      <div className="lg:flex lg:gap-16 xl:gap-24 mt-8">
        {/* //bar chart */}
        <BarChartComponent data={data?.data} />

        {/* pie chart */}
        <PieChartComponent data={data?.data} />
      </div>
      <div className="w-96 md:w-[484px] mt-16">
        <UserManagementTable />
      </div>
    </div>
  );
};

export default MetricsData;
