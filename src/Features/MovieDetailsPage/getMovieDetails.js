import { useState, useEffect } from "react";
import { details_url, getAuthorizationOption } from "../../apiURLs";

export const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async () => setMovie(await getMovieDetails(id)))();
  }, [id]);

  return [movie];
};

export const getMovieDetails = async (id) => {
  const response = await fetch(details_url + `${id}`, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
