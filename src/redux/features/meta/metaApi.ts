import { baseApi } from "../../api/baseApi";

const metaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMetaData: builder.query({
      query: () => ({
        url: "/meta",
        method: "GET",
      }),
    }),
    getUserMetaData: builder.query({
      query: () => ({
        url: "/meta/user",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMetaDataQuery, useGetUserMetaDataQuery } = metaApi;
