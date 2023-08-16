import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: null,
};

const personCreditsSlice = createSlice({
  name: "personCredits",
  initialState,
  reducers: {
    fetchPersonCredits: (state) => {
      state.status = "loading";
      state.data = null;
    },
    setPersonCredits: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    setError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchPersonCredits, setPersonCredits, setError } =
  personCreditsSlice.actions;
export const selectStatus = (state) => state.personCredits.status;
export const selectPersonCredits = (state) => state.personCredits.data;

export default personCreditsSlice.reducer;
