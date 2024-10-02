import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  username: string;
  email: string;
  name?: {
    firstname: string;
    lastname: string;
  };
  phone?: string;
  address?: {
    city: string;
    street: string;
    number: string;
    zipcode: string;
  };
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (username) => `users/${username}`,
    }),
    updateUser: builder.mutation<
      User,
      { username: string; updates: Partial<User> }
    >({
      query: ({ username, updates }) => ({
        url: `users/${username}`,
        method: "PUT",
        body: updates,
      }),
    }),
    updatePassword: builder.mutation<
      void,
      { username: string; currentPassword: string; newPassword: string }
    >({
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
