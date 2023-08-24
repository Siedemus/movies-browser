import { useEffect } from "react";

export const useReplaceSearchParam = (
  location,
  query,
  history,
  dispatch,
  fetchMovies,
  searchParams,
  fetchPeopleListLoad
) => {
  useEffect(() => {
    if (query === "") {
      searchParams.delete("search");
      searchParams.set("page", "1");
    } else {
      searchParams.set("search", query);
      searchParams.set("page", "1");
    }

    if (query !== "") {
      location.pathname.includes("/movies")
        ? history.replace(`/movies?${searchParams.toString()}`)
        : history.replace(`/people?${searchParams.toString()}`);
    }

    location.pathname.includes("/movies")
      ? dispatch(fetchMovies())
      : dispatch(fetchPeopleListLoad());
  }, [query]);
};
