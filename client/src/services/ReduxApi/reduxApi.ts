import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '../../types';

interface Slugs {
  slug: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
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
