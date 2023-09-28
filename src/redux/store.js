import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { api } from "./api/apiSlice";
import accessTokenSlice from "./slices/accessTokenSlice";
import pcBuildSlice from "./slices/pcBuildSlice";

const store = configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    pcBuild: pcBuildSlice,
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
