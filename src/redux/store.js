import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import accessTokenSlice from "./slices/accessTokenSlice";
import pcBuildSlice from "./slices/pcBuildSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    pcBuild: pcBuildSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
