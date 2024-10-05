import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userAuth.accessToken;
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "items",
    }),
    getItemById: builder.query({
      query: (id) => `items/${id}`,
    }),
  }),
});

export const { useGetItemsQuery, useGetItemByIdQuery } = itemApi;
