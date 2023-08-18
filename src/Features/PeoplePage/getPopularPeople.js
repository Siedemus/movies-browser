import { getAuthorizationOption, people_url, searchPeople } from "../../apiURLs"



export const getPopularPeople = async (currentPage, searchQuery) => {
    let apiLink;
    if (searchQuery === "") {
      apiLink = `${people_url}?page=${currentPage}`;
    } else {
      apiLink = `${searchPeople}query=${searchQuery}&page=${currentPage}`;
    }

    const response = await fetch(apiLink, getAuthorizationOption);

    if (!response.ok) {
        throw new Error();
    }

    return response.json();
};