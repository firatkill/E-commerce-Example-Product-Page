import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import imgSlice from "./img-slice";

const store = configureStore({
  reducer: { img: imgSlice.reducer, cart: cartSlice.reducer },
});
export default store;
