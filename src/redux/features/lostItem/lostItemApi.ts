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
  }),
});

export const { useSubmitLostItemMutation } = lostItemApi;
