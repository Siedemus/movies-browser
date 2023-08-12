import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    fetchDetails: (state) => {
      state.status = "loading";
      state.data = null;
    },
    setDetails: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    setError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchDetails, setDetails, setError } = detailsSlice.actions;

export const selectStatus = (state) => state.details.status;
export const selectDetails = (state) => state.details.data;

export default detailsSlice.reducer;
