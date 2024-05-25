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
  }),
});

export const { useSubmitFoundItemMutation } = foundItemApi;
