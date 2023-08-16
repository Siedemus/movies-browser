import { getAuthorizationOption, movies, search } from "../../apiURLs";

export const getMovies = async (currentPage, searchQuery) => {
  let apiLink;
  if (searchQuery === "") {
    apiLink = `${movies}?page=${currentPage}`;
  } else {
    apiLink = `${search}&query=${searchQuery}&page=${currentPage}`;
  }

  const response = await fetch(apiLink, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
