import { createSlice } from "@reduxjs/toolkit";

const imgSlice = createSlice({
  name: "img",
  initialState: { currentImg: "image-product-1.jpg" },
  reducers: {
    assignCurrentImg(state, action) {
      state.currentImg = action.payload;
    },
  },
});

export default imgSlice;
export const imgActions = imgSlice.actions;
