import { authKey } from "@/types";
import { getFromLocalStorage } from "@/utils/localStorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
    prepareHeaders: (headers) => {
      const token = getFromLocalStorage(authKey);

      if (token) {
        headers.set("authorization", `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["foundItem", "lostItem", "claimItem", "user", "category"],
  endpoints: () => ({}),
});
