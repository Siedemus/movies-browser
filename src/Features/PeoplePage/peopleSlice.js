import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  currentPage: 1,
  status: "loading",
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    fetchPeopleListLoad: (state) => {
      state.status = "loading";
    },
    fetchPeopleListSuccess: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    fetchPeopleListError: (state) => {
      state.status = "error";
    },
    firstPeoplePage: (state) => {
      state.currentPage = 1;
    },
    previousPeoplePage: (state) => {
      if (state.currentPage !== 1) {
        state.currentPage--;
      }
    },
    nextPeoplePage: (state, { payload }) => {
      if (state.currentPage !== payload) {
        state.currentPage++;
      }
    },
    lastPeoplePage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setPeoplePageByQuery: (state, { payload }) => {
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
  fetchPeopleListLoad,
  fetchPeopleListError,
  fetchPeopleListSuccess,
  firstPeoplePage,
  previousPeoplePage,
  nextPeoplePage,
  lastPeoplePage,
  setPeoplePageByQuery,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectStatus = (state) => selectPeopleState(state).status;

export const selectPeopleList = (state) =>
  selectPeopleState(state).data.results;
export const selectTotalPages = (state) =>
  selectPeopleState(state).data.total_pages;
export const selectTotalResults = (state) =>
  selectPeopleState(state).data.total_results;

export const selectCurrentPeoplePage = (state) => state.people.currentPage;

export default peopleSlice.reducer;
