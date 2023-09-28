import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setInLocalStorage,
} from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: getFromLocalStorage("accessToken") || null,
};

const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      setInLocalStorage("accessToken", action.payload);
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
      removeFromLocalStorage("accessToken");
    },
  },
});

export const { setAccessToken, clearAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
