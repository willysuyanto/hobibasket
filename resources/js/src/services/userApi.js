import api from "../redux/slice/apiSlice";
import { getAuthHeaders } from "../utils/helpers";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params) => ({
        url: "/api/user",
        method: "GET",
        headers: getAuthHeaders(),
      }),
      providesTags: () => ["Users"],
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/api/user/${id}`,
        method: "GET",
        headers: getAuthHeaders(),
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/api/user",
        method: "POST",
        headers: getAuthHeaders(),
        data,
      }),
      invalidatesTags: () => ["Users"],
    }),
    updateUser: builder.mutation({
      query: (data, id) => ({
        url: `/api/user/${id}`,
        method: "POST",
        headers: getAuthHeaders(),
        data,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
} = userApi;
