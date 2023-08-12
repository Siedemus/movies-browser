import { delay, call, put, takeEvery } from "redux-saga/effects";
import { fetchDetails, setDetails, setError } from "./detailsSlice";
import { getMovieDetails } from "./getMovieDetails";

function* fetchDetailsHandler({ payload: id }) {
  try {
    const details = yield call(getMovieDetails, id);
    yield put(setDetails(details));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* detailsSaga() {
  yield takeEvery(fetchDetails.type, fetchDetailsHandler);
}
