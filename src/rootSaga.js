import { all } from "redux-saga/effects";
import { moviesSaga } from "./Features/MoviesPage/moviesSaga";
import { genresSaga } from "./Common/MainTail/genreSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), genresSaga()]);
}
