import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { api } from "./api/apiSlice";
import accessTokenSlice from "./slices/accessTokenSlice";

const store = configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
