import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (args) => ({
        url: "/user",
        method: "GET",
        params: args,
      }),
      providesTags: ["user"],
    }),

    getSingleUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    updateUser: builder.mutation({
      query: (data) => ({
        url: `/user/${data?.id}`,
        method: "PUT",
        body: data?.body,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
