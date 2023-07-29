import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Features/MoviesPage/moviesSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import genresSlice from "./Common/MainTail/genresSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
