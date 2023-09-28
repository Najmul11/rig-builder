import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectAccessToken } from "../selectors";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      const accessToken = selectAccessToken(state);
      if (accessToken) {
        headers.set("Authorization", accessToken);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `/users/signup`,
        method: "POST",
        body: data,
        headers: {},
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: `/users/login`,
        method: "POST",
        body: data,
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: `/users/my-profile`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUserLoginMutation,
  useGetProfileQuery,
} = api;
