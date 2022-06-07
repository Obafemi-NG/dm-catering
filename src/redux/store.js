import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    currentUser: userSlice.reducer,
  },
});

export default store;
