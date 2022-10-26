import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartShow: false,
    cartItems: {
      "Fall Limited Edition Sneakers": {
        amount: 2,
        price: 125,
      },
    },
  },
  reducers: {},
});

export default cartSlice;
export const cartActions = cartSlice.actions;
