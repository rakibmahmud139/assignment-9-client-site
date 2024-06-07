import { baseApi } from "../../api/baseApi";

const lostItemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitLostItem: builder.mutation({
      query: (data) => ({
        url: "/lost-items",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["lostItem"],
    }),

    getLostItem: builder.query({
      query: (args) => ({
        url: "/lost-items",
        method: "GET",
        params: args,
      }),
      providesTags: ["lostItem"],
    }),

    getSingleLostItem: builder.query({
      query: (id) => ({
        url: `/lost-items/${id}`,
        method: "GET",
      }),
      providesTags: ["lostItem"],
    }),

    updateLostItem: builder.mutation({
      query: (data) => ({
        url: `/lost-items/${data?.id}`,
        method: "PATCH",
        body: data?.body,
      }),
      invalidatesTags: ["lostItem"],
    }),

    deleteLostItem: builder.mutation({
      query: (id) => ({
        url: `/lost-items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["lostItem"],
    }),
  }),
});

export const {
  useSubmitLostItemMutation,
  useGetLostItemQuery,
  useUpdateLostItemMutation,
  useDeleteLostItemMutation,
  useGetSingleLostItemQuery,
} = lostItemApi;
