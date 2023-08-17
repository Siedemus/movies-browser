import { all } from "redux-saga/effects";
import { moviesSaga } from "./Features/MoviesPage/moviesSaga";
import { genresSaga } from "./Common/MainTail/genreSaga";
import { detailsSaga } from "./Features/MovieDetailsPage/detailsSaga";
import { creditsSaga } from "./Features/MovieDetailsPage/creditsSaga";
import { peopleSaga } from "./Features/PeoplePage/peopleSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), genresSaga(), detailsSaga(), creditsSaga(), peopleSaga()]);
}
