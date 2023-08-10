import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "5d7b278fff9e1056c09e514d9f0bc9f3";

export const getSearch = async ({ query, page }) => {
    const response = await axios.get(
        `${URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`
    );

    return await response.data;
};

export const getPopularPeople = async (page) => {
    const response = await axios.get(
        `${URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    return await response.data;
};

export const getSearchPeople = async ({ query, page }) => {
    const response = await axios.get(
        `${URL}/search/person?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`
    );

    return await response.data;
};