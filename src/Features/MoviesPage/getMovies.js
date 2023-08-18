import { getAuthorizationOption, movies, searchMovie } from "../../apiURLs";

export const getMovies = async (currentPage, searchQuery) => {
  let apiLink;
  if (searchQuery === "") {
    apiLink = `${movies}?page=${currentPage}`;
  } else {
    apiLink = `${searchMovie}&query=${searchQuery}&page=${currentPage}`;
  }

  const response = await fetch(apiLink, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
