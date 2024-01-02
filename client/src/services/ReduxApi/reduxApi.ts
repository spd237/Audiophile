import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '../../types';

interface Slugs {
  slug: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers) => {
      const token = JSON.parse(
        localStorage.getItem('sb-gfgywzotuybpcpuqczfi-auth-token') || 'null'
      )?.access_token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ['cartItems'],
  endpoints: (builder) => ({
    getAllProductSlugs: builder.query<Slugs[], void>({
      query: () => `/audiophile/getAllProductSlugs`,
    }),
    getCategory: builder.query<ProductType[], string | void>({
      query: (category) => `/audiophile/${category}`,
    }),
    getProduct: builder.query<ProductType, string | void>({
      query: (slug) => `/audiophile/product-details/${slug}`,
    }),
  }),
});

export const {
  useGetAllProductSlugsQuery,
  useGetCategoryQuery,
  useGetProductQuery,
} = apiSlice;
