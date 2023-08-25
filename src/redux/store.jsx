import { configureStore } from "@reduxjs/toolkit";
import { goodsApi } from "./goodsApi";
import { stocksApi } from "./stocksApi";

export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    [stocksApi.reducerPath]: stocksApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stocksApi.middleware, goodsApi.middleware),
});
