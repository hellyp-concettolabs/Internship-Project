import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CartProductCount = createSlice({
  name: "cartItemCount",
  initialState,
  reducers: {
    cartProductCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { cartProductCount } = CartProductCount.actions;

export default CartProductCount.reducer;
