import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Components/CartProductCount/CartProductCount.jsx";
import wishListReducer from "../Components/WishListProductCount/WishListProductCount.jsx"
import userReducer from "../Components/UserData/UserSlice.jsx";

const store = configureStore({
  reducer: {
    userData: userReducer,
    cartCount: countReducer,
    wishListCount: wishListReducer,
  },
});

export default store;
