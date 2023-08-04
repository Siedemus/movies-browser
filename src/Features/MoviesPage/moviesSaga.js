import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  fetchMovies,
  setMovies,
  setError,
  selectCurrentPage,
} from "./moviesSlice";
import { getMovies } from "./getMovies";

function* fetchMoviesHandler() {
  try {
    const currentPage = yield select(selectCurrentPage);
    const movies = yield call(getMovies, currentPage);
    yield put(setMovies(movies));
  } catch {
    yield put(setError);
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}
