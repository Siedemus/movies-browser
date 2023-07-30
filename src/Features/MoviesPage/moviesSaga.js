import { delay, call, put, takeEvery } from "redux-saga/effects";
import { fetchMovies, setMovies, setError } from "./moviesSlice";
import { getMovies } from "./getMovies";

function* fetchMoviesHandler() {
  try {
    yield delay(2000);
    const movies = yield call(getMovies);
    yield put(setMovies(movies));
  } catch {
    yield put(setError);
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}
