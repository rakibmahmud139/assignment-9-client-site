import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/found-item-categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),
    getCategory: builder.query({
      query: () => ({
        url: "/found-item-categories",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useAddCategoryMutation, useGetCategoryQuery } = categoryApi;
