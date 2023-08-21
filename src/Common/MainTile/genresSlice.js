import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: {},
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    fetchGenres: (state) => {
      state.status = "loading";
    },
    setGenres: (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    },
    setError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchGenres, setGenres, setError } = genresSlice.actions;

const selectGenresState = (state) => state.genres.data;

export const selectGenres = (state) => selectGenresState(state).genres;

export default genresSlice.reducer;
