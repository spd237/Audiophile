import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from '../../Components/Cart/cartItemsSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartItemsReducer);

const store = configureStore({
  reducer: {
    cartItems: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
