import { useState, useEffect } from "react";
import { detailsUrl, getAuthorizationOption } from "../../apiURLs";

export const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async () => setMovie(await getMovieDetails(id)))();
  }, [id]);

  return [movie];
};

export const getMovieDetails = async (id) => {
  const response = await fetch(detailsUrl + `${id}`, getAuthorizationOption);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
