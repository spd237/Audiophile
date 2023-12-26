import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from '../../Components/Cart/cartItemsSlice';

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
