import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './features/cart';
import { movieApi } from './services/movieApi';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware]),
});
