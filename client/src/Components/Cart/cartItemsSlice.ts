import { RootState } from '../../services/store/store';
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit/react';
import { CartItem } from '../../types';
import { apiSlice } from '../../services/ReduxApi/reduxApi';

interface removeAllItemsReturn {
  count: number;
}
interface CartItemToAdd {
  name: string;
  quantity: number;
  price: number;
}

const initialState: CartItem[] = [];

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: initialState,
  reducers: {
    itemAdded: {
      reducer: (state, action: PayloadAction<CartItem>) => {
        const { name, quantity } = action.payload;
        const existingItem = state.find((item) => item.name === name);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          state.push(action.payload);
        }
      },
      prepare(name: string, quantity: number, price: number) {
        return {
          payload: {
            id: nanoid(),
            name,
            quantity,
            price,
          },
        };
      },
    },
    itemRemoved: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      const item = state.find((item) => item.name === name);
      if (item) {
        item.quantity -= 1;
      }
    },
    removeAll: () => {
      return [];
    },
  },
});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCartItems: builder.query<CartItem[], void>({
      query: () => '/audiophile/cart-items',
      providesTags: ['cartItems'],
    }),
    addToCart: builder.mutation<CartItem, CartItemToAdd>({
      query: (item) => ({
        url: '/audiophile/add-item',
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['cartItems'],
    }),
    increaseQuantity: builder.mutation<CartItem, string>({
      query: (id) => ({
        url: '/audiophile/increase-quantity',
        method: 'PATCH',
        body: { id },
      }),
      invalidatesTags: ['cartItems'],
    }),
    decreaseQuantity: builder.mutation<CartItem, string>({
      query: (id) => ({
        url: '/audiophile/decrease-quantity',
        method: 'PATCH',
        body: { id },
      }),
      invalidatesTags: ['cartItems'],
    }),
    removeAllItems: builder.mutation<removeAllItemsReturn, void>({
      query: () => ({
        url: '/audiophile/remove-all',
        method: 'POST',
      }),
      invalidatesTags: ['cartItems'],
    }),
  }),
});

export const { itemAdded, itemRemoved, removeAll } = cartItemsSlice.actions;
export const {
  useGetCartItemsQuery,
  useAddToCartMutation,
  useIncreaseQuantityMutation,
  useDecreaseQuantityMutation,
  useRemoveAllItemsMutation,
} = extendedApiSlice;
export const selectCartItems = (state: RootState) => state.cartItems;
export default cartItemsSlice.reducer;
