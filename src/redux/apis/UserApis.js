import { apistore } from "./apistore";
export const UserApi = apistore.injectEndpoints({
  endpoints: (builder) => ({
    reducerPath: "UserApi",
    register: builder.mutation({
      query: (data) => ({
        url: `/auth/register`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = UserApi;
