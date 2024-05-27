"use client";

import { useGetMetaDataQuery } from "@/redux/features/meta/metaApi";
import { Box } from "@mui/material";

const MetricsData = () => {
  const { data } = useGetMetaDataQuery({});

  return (
    <Box display="flex" justifyContent="space-evenly">
      <div className="stats shadow-2xl ">
        <div className="stat glass p-4">
          <div className="stat-title text-white">Users</div>
          <div className="stat-value  text-white">
            Total: {data?.data?.totalUsers}
          </div>
        </div>
      </div>

      <div className="stats shadow mx-4">
        <div className="stat bg-pink-200 shadow-2xl shadow-slate-800">
          <div className="stat-title  text-gray-600">Lost Items</div>
          <div className="stat-value text-gray-600">
            Total: {data?.data?.totalLostItems}
          </div>
        </div>
      </div>

      <div className="stats shadow ">
        <div className="stat  bg-purple-200 shadow-2xl">
          <div className="stat-title  text-gray-600">Found Items</div>
          <div className="stat-value  text-gray-600">
            Total: {data?.data?.totalFoundItems}
          </div>
        </div>
      </div>

      <div className="stats shadow ">
        <div className="stat  bg-sky-200 shadow-2xl">
          <div className="stat-title  text-gray-600">Claim Items</div>
          <div className="stat-value text-gray-600">
            Total: {data?.data?.totalClaimItems}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default MetricsData;
