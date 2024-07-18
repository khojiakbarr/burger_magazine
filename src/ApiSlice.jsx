import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "./URL";

export const categoryApi = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    addCategories: builder.mutation({
      query: (category) => ({
        url: "/categories",
        method: "POST",
        body: category,
      }),
    }),
    getFoods: builder.query({
      query: () => "/foods",
    }),
    addFoods: builder.mutation({
      query: (foot) => ({
        url: "/foods",
        method: "POST",
        body: foot,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useAddCategoriesMutation,
  useAddFoodsMutation,
  useGetFoodsQuery,
} = categoryApi;
