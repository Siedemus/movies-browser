import { getPopularPeople, getSearchPeople } from "./getDataApi";
import { fetchPeopleListError, fetchPeopleListLoad, fetchPeopleListSuccess, fetchSearchPeopleLoad } from "./peopleSlice";
import { call, delay, put, takeLatest } from "redux-saga/effects";

function* getPopularPeopleHandler() {
    try {
        const data = yield call(getPopularPeople, page);
        yield delay(1000);
        yield put(fetchPeopleListSuccess({ data }));
    } catch (error) {
        yield put(fetchPeopleListError());
    }
}

function* getSearchPeopleHandler() {
    try {
        yield delay(1000);
        const data = yield call(getSearchPeople, { query, page });
        yield put(fetchPeopleListSuccess({ data }));
    } catch (error) {
        yield put(fetchPeopleListError());
    }
}

export function* watchFetchPeopleList() {
    yield takeLatest(fetchPeopleListLoad.type, getPopularPeopleHandler);
    yield takeLatest(fetchSearchPeopleLoad.type, getSearchPeopleHandler);
}