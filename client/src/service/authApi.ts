import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: "auth/refresh-token",
        method: "POST",
        body: { refreshToken },
      }),
    }),

    logout: builder.mutation({
      query: (accessToken) => ({
        url: "auth/logout",
        method: "POST",
        headers: {
          "x-auth-token": accessToken,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
} = authApi;
