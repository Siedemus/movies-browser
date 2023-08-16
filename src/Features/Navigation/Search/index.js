import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { Wrapper, Input } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { onSearchChange, selectQuery } from "./searchSlice";
import { useEffect } from "react";
import { fetchMovies } from "../../MoviesPage/moviesSlice";

export const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (query === "") {
      searchParams.delete("search");
      searchParams.set("page", "1");
    } else {
      searchParams.set("search", query);
      searchParams.set("page", "1");
    }

    history.replace(`${location.pathname}?${searchParams.toString()}`);
    dispatch(fetchMovies());
  }, [query]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newQuery = searchParams.get("search") || "";
    if (newQuery !== query) {
      dispatch(onSearchChange(newQuery));
    }
  }, [location.search]);

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      dispatch(onSearchChange(""));
    } else {
      dispatch(onSearchChange(target.value.trim()));
    }
  };

  return (
    <>
      <Wrapper>
        <Input
          placeholder="Search for movies..."
          onChange={(e) => onInputChange(e)}
          value={query || ""}
        />
      </Wrapper>
    </>
  );
};
