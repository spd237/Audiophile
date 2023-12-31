import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '../../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getCategory: builder.query<ProductType[], string | void>({
      query: (category) => `/audiophile/${category}`,
    }),
    getProduct: builder.query<ProductType, string | void>({
      query: (slug) => `/audiophile/product-details/${slug}`,
    }),
  }),
});

export const { useGetCategoryQuery, useGetProductQuery } = apiSlice;
