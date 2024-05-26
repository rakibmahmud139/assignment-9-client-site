import { baseApi } from "../../api/baseApi";

const foundItemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitFoundItem: builder.mutation({
      query: (data) => ({
        url: "/found-items",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["foundItem"],
    }),

    getFoundItem: builder.query({
      query: (args) => ({
        url: "/found-items",
        method: "GET",
        params: args,
      }),
      providesTags: ["foundItem"],
    }),
  }),
});

export const { useSubmitFoundItemMutation, useGetFoundItemQuery } =
  foundItemApi;
