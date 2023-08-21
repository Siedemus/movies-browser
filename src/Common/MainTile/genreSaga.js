import { call, put, takeEvery } from "redux-saga/effects";
import { setGenres, fetchGenres, setError } from "./genresSlice";
import { getGenres } from "./getGenres";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(setGenres(genres));
  } catch {
    yield put(setError);
  }
}

export function* genresSaga() {
  yield takeEvery(fetchGenres.type, fetchGenresHandler);
}
