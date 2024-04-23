import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Components/CartProductCount/CartProductCount.jsx";

const store = configureStore({
  reducer: {
    cartCount: countReducer,
  },
});

export default store;
