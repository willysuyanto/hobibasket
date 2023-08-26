import api from "../redux/slice/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/api/login',
        method: 'POST',
        data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/api/register',
        method: 'POST',
        data,
      })
    })
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
} = authApi
