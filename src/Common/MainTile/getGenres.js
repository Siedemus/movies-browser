import { genres, getAuthorizationOption } from "../../apiURLs";

export const getGenres = async () => {
  const response = await fetch(genres, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
