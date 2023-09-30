import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import pcBuildSlice from "./slices/pcBuildSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    pcBuild: pcBuildSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
