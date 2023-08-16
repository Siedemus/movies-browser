import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Features/MoviesPage/moviesSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import genresSlice from "./Common/MainTail/genresSlice";
import detailsSlice from "./Features/MovieDetailsPage/detailsSlice";
import creditsSlice from "./Features/MovieDetailsPage/creditsSlice";
import searchSlice from "./Features/Navigation/Search/searchSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresSlice,
    details: detailsSlice,
    credits: creditsSlice,
    search: searchSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
