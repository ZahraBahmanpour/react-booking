import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StaysService from "../../services/stays.services";

const initialState = {
  stays: [],
  loading: false,
  error: "",
  totalStaysCount: 0,
  filters: {},
};
export const getStays = createAsyncThunk("stays/getStays", (params) => {
  const { page, filters } = params;
  return StaysService.getStaysRequest(page, filters);
});

const staysSlice = createSlice({
  name: "stays",
  initialState,
  reducers: {
    setFilter(state, action) {
      const { filter } = action.payload;
      for (let key in filter) {
        state.filters[key] = filter[key];
      }
    },
    resetFilters(state) {
      state.filters = undefined;
    },
  },
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

export const { setFilter, resetFilters } = staysSlice.actions;
export default staysSlice.reducer;
