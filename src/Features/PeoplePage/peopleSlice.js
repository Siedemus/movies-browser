import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: [],
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
            state.people = payload;
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
        nextPeoplePage: (state) => {
            if (state.currentPage !== 500) {
                state.currentPage++;
            }
        },
        lastPeoplePage: (state) => {
            state.currentPage = 500;
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

export const selectPeopleState = (state) => state.people;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectPeopleList = (state) => selectPeopleState(state).people.results;
export const selectCurrentPeoplePage = (state) => state.movies.currentPage;

export default peopleSlice.reducer;