import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartFromPcBuild: (state, action) => {
      state.cart = [...action.payload, ...state.cart];
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addToCart, addToCartFromPcBuild } = cartSlice.actions;

export default cartSlice.reducer;
