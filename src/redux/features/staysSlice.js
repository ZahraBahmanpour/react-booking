import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StaysService from "../../services/stays.services";

const initialState = {
  stays: [],
  loading: false,
  error: "",
  totalStaysCount: 0,
};
export const getStays = createAsyncThunk("stays/getStays", (page) =>
  StaysService.getStaysRequest(page)
);

const staysSlice = createSlice({
  name: "stays",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getStays.fulfilled, (state, action) => {
      state.stays = action.payload.stays;
      state.totalStaysCount = action.payload.totalStaysCount;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getStays.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getStays.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
  },
});

export default staysSlice.reducer;
