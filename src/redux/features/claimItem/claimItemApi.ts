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

    updateStatus: builder.mutation({
      query: (data) => ({
        url: `/claims/${data.id}`,
        method: "PATCH",
        body: data?.body,
      }),
      invalidatesTags: ["claimItem"],
    }),
  }),
});

export const {
  useClaimItemMutation,
  useGetClaimItemQuery,
  useUpdateStatusMutation,
} = claimItemApi;
