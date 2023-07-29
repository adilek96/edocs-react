import { configureStore } from "@reduxjs/toolkit";
import { goodsApi } from "./goodsApi";
import { productBarcodeApi } from "./productBarcodeApi";

export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    [productBarcodeApi.reducerPath]: productBarcodeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      goodsApi.middleware,
      productBarcodeApi.middleware
    ),
    
});
