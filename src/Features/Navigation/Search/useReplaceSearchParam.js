import { useEffect } from "react";

export const useReplaceSearchParam = (
  location,
  query,
  history,
  dispatch,
  fetchMovies,
  searchParams
) => {
  useEffect(() => {
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
};
