import { apiSlice } from '../../services/ReduxApi/reduxApi';
import { CartItem, UserResponse } from '../../types';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<
      UserResponse,
      { id: string; cartItems: CartItem[] }
    >({
      query: ({ id, cartItems }) => ({
        url: '/signup',
        method: 'POST',
        body: { id, cartItems },
      }),
    }),
    updateUser: builder.mutation<
      UserResponse,
      { id: string; cartItems: CartItem[] }
    >({
      query: ({ id, cartItems }) => ({
        url: '/signin',
        method: 'POST',
        body: { id, cartItems },
      }),
    }),
  }),
});

export const { useCreateUserMutation, useUpdateUserMutation } =
  extendedApiSlice;
