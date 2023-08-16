import { call, put, takeEvery, select, delay } from "redux-saga/effects";
import {
    fetchPeopleListError,
    fetchPeopleListLoad,
    fetchPeopleListSuccess,
    selectCurrentPeoplePage
} from "./peopleSlice";
import { getPopularPeople } from "../PeoplePage/getPopularPeople";



function* fetchPeopleHandler() {
    try {
        yield delay(1000);
        const currentPeoplePage = yield select(selectCurrentPeoplePage);
        const people = yield call(getPopularPeople, currentPeoplePage);
        yield put(fetchPeopleListSuccess(people));
    } catch {
        yield put(fetchPeopleListError());
    }
}

export function* peopleSaga() {
    yield takeEvery(fetchPeopleListLoad.type, fetchPeopleHandler);
}