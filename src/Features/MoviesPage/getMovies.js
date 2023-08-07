import { getAuthorizationOption, movies } from "../../apiURLs";

export const getMovies = async () => {
  const response = await fetch(movies, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
