import { baseApi } from "@/redux/api/baseApi";

const claimItemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    claimItem: builder.mutation({
      query: (data) => ({
        url: "/claims",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["claimItem"],
    }),

    getClaimItem: builder.query({
      query: (args) => ({
        url: "/claims",
        method: "GET",
        params: args,
      }),
      providesTags: ["claimItem"],
    }),
  }),
});

export const { useClaimItemMutation, useLazyGetClaimItemQuery } = claimItemApi;
