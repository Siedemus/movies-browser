import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { fetchMovies } from "../../MoviesPage/moviesSlice";
import { fetchPeopleListLoad } from "../../PeoplePage/peopleSlice";

export const useReplaceSearchParam = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const replaceSearchParam = ({ value }) => {
    const searchParams = new URLSearchParams(location.search);
    const URLPrefix = location.pathname.split("/")[1];

    if (value === undefined) {
      searchParams.delete("search");
      searchParams.set("page", 1);
    } else {
      searchParams.delete("search");
      searchParams.delete("page");
      searchParams.set("search", value);
      searchParams.set("page", 1);
    }

    history.push(`/${URLPrefix}?${searchParams.toString()}`);
    URLPrefix === "movies"
      ? dispatch(fetchMovies())
      : dispatch(fetchPeopleListLoad());
  };

  return replaceSearchParam;
};
