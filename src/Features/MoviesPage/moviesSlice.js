import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: {},
  currentPage: 1,
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
    firstMoviePage: (state) => {
      state.currentPage = 1;
    },
    previousMoviePage: (state) => {
      if (state.currentPage !== 1) {
        state.currentPage--;
      }
    },
    nextMoviePage: (state) => {
      if (state.currentPage !== 500) {
        state.currentPage++;
      }
    },
    lastMoviePage: (state) => {
      state.currentPage = 500;
    },
    setMoviePageByQuery: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const {
  fetchMovies,
  setMovies,
  setError,
  firstMoviePage,
  previousMoviePage,
  nextMoviePage,
  lastMoviePage,
  setMoviePageByQuery,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies.data;

export const selectMoviesList = (state) => selectMoviesState(state).results;

export const selectCurrentMoviePage = (state) => state.movies.currentPage;

export default moviesSlice.reducer;
