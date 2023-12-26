import { RootState } from '../../services/store/store';
import { createSlice } from '@reduxjs/toolkit/react';

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {},
    removeAll: () => {},
  },
});

export const { add, remove, removeAll } = cartItemsSlice.actions;
export const selectCartItems = (state: RootState) => state.cartItems;
export default cartItemsSlice.reducer;
