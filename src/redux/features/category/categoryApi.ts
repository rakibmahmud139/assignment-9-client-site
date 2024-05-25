import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/found-item-categories",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
