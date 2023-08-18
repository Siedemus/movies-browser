import { call, put, select, delay, throttle } from "redux-saga/effects";
import {
  fetchPeopleListError,
  fetchPeopleListLoad,
  fetchPeopleListSuccess,
  selectCurrentPeoplePage,
} from "./peopleSlice";
import { getPopularPeople } from "../PeoplePage/getPopularPeople";
import { selectQuery } from "../Navigation/Search/searchSlice";

function* fetchPeopleHandler() {
  try {
    yield delay(1000);
    const searchQuery = yield select(selectQuery);
    const currentPeoplePage = yield select(selectCurrentPeoplePage);
    const people = yield call(getPopularPeople, currentPeoplePage, searchQuery);
    yield put(fetchPeopleListSuccess(people));
  } catch {
    yield put(fetchPeopleListError());
  }
}

export function* peopleSaga() {
  yield throttle(300, fetchPeopleListLoad.type, fetchPeopleHandler);
}
