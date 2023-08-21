import { useState, useEffect } from "react";
import { creditsUrl, getAuthorizationOption } from "../../apiURLs";

export const useMovieCredits = (id) => {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    (async () => setCredits(await getMovieCredits(id)))();
  }, [id]);

  return [credits];
};

export const getMovieCredits = async (id) => {
  const idCredits = creditsUrl.replace("{movie_id}", id);
  const response = await fetch(idCredits, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
