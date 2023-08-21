import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchPersonCredits,
  setPersonCredits,
  setError,
} from "./personCreditsSlice";
import { getPersonCredits } from "./getPersonCredits";

function* fetchCreditsPersonHandler({ payload: id }) {
  try {
    const personCredits = yield call(getPersonCredits, id);
    yield put(setPersonCredits(personCredits));
  } catch (error) {
    yield put(setError());
  }
}

export function* personCreditsSaga() {
  yield takeEvery(fetchPersonCredits.type, fetchCreditsPersonHandler);
}
