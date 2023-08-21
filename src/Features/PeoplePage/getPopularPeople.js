import { getAuthorizationOption, peopleUrl, searchPeople } from "../../apiURLs";

export const getPopularPeople = async (currentPage, searchQuery) => {
  let apiLink;
  if (searchQuery === "") {
    apiLink = `${peopleUrl}?page=${currentPage}`;
  } else {
    apiLink = `${searchPeople}query=${searchQuery}&page=${currentPage}`;
  }

  const response = await fetch(apiLink, getAuthorizationOption);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
