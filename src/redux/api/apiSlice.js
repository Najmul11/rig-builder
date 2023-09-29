import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectAccessToken } from "../selectors";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rig-build-backend.vercel.app/api/v1",
  }),
  tagTypes: ["reviews"],

  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
      providesTags: ["reviews"],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/post-review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, usePostReviewMutation } = api;
