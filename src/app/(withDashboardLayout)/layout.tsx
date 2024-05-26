import DashboardDrawer from "@/components/dashboardDrawer/DashboardDrawer";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default layout;
