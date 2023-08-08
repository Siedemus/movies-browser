import { getAuthorizationOption, movies } from "../../apiURLs";

export const getMovies = async (currentPage) => {
  const response = await fetch(`${movies}?page=${currentPage}`, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
