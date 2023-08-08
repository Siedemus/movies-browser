import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: null,
};

const creditsSlice = createSlice({
  name: "credits",
  initialState,
  reducers: {
    fetchCredits: (state) => {
      state.status = "loading";
      state.data = null;
    },
    setCredits: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    setError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchCredits, setCredits, setError } = creditsSlice.actions;

export const selectCredits = (state) => state.credits.data;

export default creditsSlice.reducer;
