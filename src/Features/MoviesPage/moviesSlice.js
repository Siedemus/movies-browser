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
    nextMoviePage: (state, { payload }) => {
      if (state.currentPage !== payload) {
        state.currentPage++;
      }
    },
    lastMoviePage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setMoviePageByQuery: (state, { payload }) => {
      if (isNaN(payload)) {
        state.currentPage = 1;
      } else if (payload > 500) {
        state.currentPage = 500;
      } else if (payload < 1) {
        state.currentPage = 1;
      } else {
        state.currentPage = payload;
      }
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

const selectMoviesState = (state) => state.movies;

export const selectStatus = (state) => selectMoviesState(state).status;
export const selectMoviesList = (state) =>
  selectMoviesState(state).data.results;
export const selectTotalPages = (state) =>
  selectMoviesState(state).data.total_pages;

export const selectCurrentMoviePage = (state) => state.movies.currentPage;

export default moviesSlice.reducer;
