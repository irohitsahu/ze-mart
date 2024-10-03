import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userAuth.accessToken;
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (username) => `users/${username}`,
    }),
    updateUser: builder.mutation({
      query: ({ username, updates }) => ({
        url: `users/${username}`,
        method: "PUT",
        body: updates,
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ username, ...passwords }) => ({
        url: `users/${username}/password`,
        method: "PUT",
        body: passwords,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
} = userApi;
