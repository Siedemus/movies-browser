import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    fetchPerson: (state) => {
      state.status = "loading";
      state.data = null;
    },
    setPerson: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    setError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchPerson, setPerson, setError } = personSlice.actions;

export const selectStatus = (state) => state.person.status;
export const selectPerson = (state) => state.person.data;

export default personSlice.reducer;
