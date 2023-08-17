import { getAuthorizationOption, people_url } from "../../apiURLs"



export const getPopularPeople = async (page) => {
    const response = await fetch(`${people_url}?page=${page}`, getAuthorizationOption);

    if (!response.ok) {
        throw new Error();
    }

    return response.json();
};