import { useState, useEffect } from "react";
import { detailPerson_url, getAuthorizationOption } from "../../apiURLs";

export const usePersonDetails = (id) => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    (async () => setPerson(await getPersonDetails(id)))();
  }, [id]);

  return [person];
};

export const getPersonDetails = async (id) => {
  const idPerson = detailPerson_url.replace("{person_id}", id);
  const response = await fetch(idPerson, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
