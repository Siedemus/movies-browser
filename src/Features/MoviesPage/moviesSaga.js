import { call, put, takeEvery, select, delay } from "redux-saga/effects";
import {
  fetchMovies,
  setMovies,
  setError,
  selectCurrentMoviePage,
} from "./moviesSlice";
import { getMovies } from "./getMovies";

function* fetchMoviesHandler() {
  try {
    yield delay(1000)
    const currentMoviePage = yield select(selectCurrentMoviePage);
    const movies = yield call(getMovies, currentMoviePage);
    yield put(setMovies(movies));
  } catch {
    yield put(setError);
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}