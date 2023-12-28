import { RootState } from '../../services/store/store';
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit/react';
import { CartItem } from '../../types';

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

export const { itemAdded, itemRemoved, removeAll } = cartItemsSlice.actions;
export const selectCartItems = (state: RootState) => state.cartItems;
export default cartItemsSlice.reducer;
