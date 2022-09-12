import { configureStore } from "@reduxjs/toolkit";
import staysSlice from "./features/staysSlice";

export const store = configureStore({
  reducer: {
    stays: staysSlice,
  },
});
