import { authKey } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUser = async (router: AppRouterInstance) => {
  localStorage.removeItem(authKey);
  router.refresh();
};
