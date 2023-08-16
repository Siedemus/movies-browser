import { call, put, select, delay, throttle } from "redux-saga/effects";
import {
  fetchMovies,
  setMovies,
  setError,
  selectCurrentMoviePage,
} from "./moviesSlice";
import { getMovies } from "./getMovies";
import { selectQuery } from "../Navigation/Search/searchSlice";

function* fetchMoviesHandler() {
  try {
    yield delay(1000);
    const currentMoviePage = yield select(selectCurrentMoviePage);
    const searchQuery = yield select(selectQuery);
    const movies = yield call(getMovies, currentMoviePage, searchQuery);
    yield put(setMovies(movies));
  } catch {
    yield put(setError);
  }
}

export function* moviesSaga() {
  yield throttle(300, fetchMovies.type, fetchMoviesHandler);
}
