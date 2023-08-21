import { useState, useEffect } from "react";
import { getAuthorizationOption, personCreditsUrl } from "../../apiURLs";

export const usePersonCredits = (id) => {
  const [personCredits, setPersonCredits] = useState(null);

  useEffect(() => {
    (async () => setPersonCredits(await getPersonCredits(id)))();
  }, [id]);

  return [personCredits];
};

export const getPersonCredits = async (id) => {
  const idPersonCredits = personCreditsUrl.replace("{person_id}", id);
  const response = await fetch(idPersonCredits, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
