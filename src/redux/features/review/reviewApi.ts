import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    giveReview: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),

    getReview: builder.query({
      query: (args) => ({
        url: "/review",
        method: "GET",
        params: args,
      }),
      providesTags: ["review"],
    }),
  }),
});

export const { useGiveReviewMutation, useGetReviewQuery } = reviewApi;
