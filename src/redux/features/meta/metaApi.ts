import { baseApi } from "../../api/baseApi";

const metaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMetaData: builder.query({
      query: () => ({
        url: "/meta",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMetaDataQuery } = metaApi;
