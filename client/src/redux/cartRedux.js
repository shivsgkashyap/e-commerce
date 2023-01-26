import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    clearProducts: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions;
export default cartSlice.reducer;
