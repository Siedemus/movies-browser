import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMovies: (state) => {
      state.status = "loading";
    },
    setMovies: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    setError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchMovies, setMovies, setError } = moviesSlice.actions;

const selectMoviesState = (state) => state.movies.data;

export const selectMoviesList = (state) => selectMoviesState(state).results;

export default moviesSlice.reducer;
