import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useChangePasswordMutation } = reviewApi;
