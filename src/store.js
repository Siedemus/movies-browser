import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Features/MoviesPage/moviesSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import genresSlice from "./Common/MainTail/genresSlice";
import detailsSlice from "./Features/MovieDetailsPage/detailsSlice";
import creditsSlice from "./Features/MovieDetailsPage/creditsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresSlice,
    details: detailsSlice,
    credits: creditsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;