import { baseApi } from "../../api/baseApi";

const lostItemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitLostItem: builder.mutation({
      query: (data) => ({
        url: "/lost-items",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["lostItem"],
    }),

    getLostItem: builder.query({
      query: (args) => ({
        url: "/lost-items",
        method: "GET",
        params: args,
      }),
      providesTags: ["lostItem"],
    }),
  }),
});

export const { useSubmitLostItemMutation, useGetLostItemQuery } = lostItemApi;
