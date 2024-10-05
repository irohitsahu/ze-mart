import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
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
      query: ({ refreshToken, username }) => ({
        url: "auth/refresh-token",
        method: "POST",
        body: { refreshToken: refreshToken, username: username },
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
