import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const WishListProductCount = createSlice({
  name: "wishListItemCount",
  initialState,
  reducers: {
    wishListProductCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { wishListProductCount } = WishListProductCount.actions;

export default WishListProductCount.reducer;