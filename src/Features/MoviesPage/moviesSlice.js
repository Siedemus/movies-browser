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
    firstPage: (state) => {
      state.currentPage = 1;
    },
    previousPage: (state) => {
      if (state.currentPage !== 1) {
        state.currentPage--;
      }
    },
    nextPage: (state) => {
      if (state.currentPage !== 500) {
        state.currentPage++;
      }
    },
    lastPage: (state) => {
      state.currentPage = 500;
    },
  },
});

export const {
  fetchMovies,
  setMovies,
  setError,
  firstPage,
  previousPage,
  nextPage,
  lastPage,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies.data;

export const selectMoviesList = (state) => selectMoviesState(state).results;

export const selectCurrentPage = (state) => state.movies.currentPage;

export default moviesSlice.reducer;
