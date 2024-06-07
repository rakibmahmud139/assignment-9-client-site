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

    getFoundItem: builder.query({
      query: (args) => ({
        url: "/found-items",
        method: "GET",
        params: args,
      }),
      providesTags: ["foundItem"],
    }),

    getSingleFoundItem: builder.query({
      query: (id) => ({
        url: `/found-items/${id}`,
        method: "GET",
      }),
      providesTags: ["foundItem"],
    }),

    updateFoundItem: builder.mutation({
      query: (data) => ({
        url: `/found-items/${data?.id}`,
        method: "PATCH",
        body: data?.body,
      }),
      invalidatesTags: ["foundItem"],
    }),

    deleteFoundItem: builder.mutation({
      query: (id) => ({
        url: `/found-items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["foundItem"],
    }),
  }),
});

export const {
  useSubmitFoundItemMutation,
  useGetFoundItemQuery,
  useUpdateFoundItemMutation,
  useDeleteFoundItemMutation,
  useGetSingleFoundItemQuery,
} = foundItemApi;
