import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import useCart from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: useCart,
  },
});

export default store;
