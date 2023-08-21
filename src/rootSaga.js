import { all } from "redux-saga/effects";
import { moviesSaga } from "./Features/MoviesPage/moviesSaga";
import { genresSaga } from "./Common/MainTile/genreSaga";
import { detailsSaga } from "./Features/MovieDetailsPage/detailsSaga";
import { creditsSaga } from "./Features/MovieDetailsPage/creditsSaga";
import { personSaga } from "./Features/PeopleDetailPage/personSaga";
import { personCreditsSaga } from "./Features/PeopleDetailPage/personCreditsSaga";
import { peopleSaga } from "./Features/PeoplePage/peopleSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    genresSaga(),
    detailsSaga(),
    creditsSaga(),
    peopleSaga(),
    personSaga(),
    personCreditsSaga(),
  ]);
}
