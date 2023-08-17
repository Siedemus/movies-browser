import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPerson, setPerson, setError } from "./personSlice";
import { getPersonDetails } from "./getPersonDetails";

function* fetchPersonHandler({ payload: id }) {
  try {
    const person = yield call(getPersonDetails, id);
    yield put(setPerson(person));
  } catch (error) {
    yield put(setError());
  }
}

export function* personSaga() {
  yield takeEvery(fetchPerson.type, fetchPersonHandler);
}
