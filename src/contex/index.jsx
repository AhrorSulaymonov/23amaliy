import { configureStore } from "@reduxjs/toolkit";
import wishlistSlices from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlices,
    cart: cartSlice,
  },
});
