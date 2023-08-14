import { call, put, takeEvery } from "redux-saga/effects";
import { fetchCredits, setCredits, setError } from "./creditsSlice";
import { getMovieCredits } from "./getMovieCredits";

function* fetchCreditsHandler({ payload: id }) {
  try {
    const credits = yield call(getMovieCredits, id);
    yield put(setCredits(credits));
  } catch (error) {
    yield put(setError());
  }
}

export function* creditsSaga() {
  yield takeEvery(fetchCredits.type, fetchCreditsHandler);
}
