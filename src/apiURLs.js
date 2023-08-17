export const images = "https://image.tmdb.org/t/p/w300";
export const poster_path = "https://image.tmdb.org/t/p/w1280";
export const movies = "https://api.themoviedb.org/3/discover/movie";
export const genres = "https://api.themoviedb.org/3/genre/movie/list";
export const details_url = "https://api.themoviedb.org/3/movie/";
export const detailImages_url =
  "https://api.themoviedb.org/3/collection/{collection_id}/images";
export const credits_url =
  "https://api.themoviedb.org/3/movie/{movie_id}/credits";
export const search = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US"

export const people_url = "https://api.themoviedb.org/3/person/popular";

export const getAuthorizationOption = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDdhNDgyZjBmNGQ2YTYzMjMyZWQ5NDYwNDY5ODc5NyIsInN1YiI6IjY0YzJlYzIzNjZhMGQzMDBlN2Q1M2I1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HucdpQMGjiivmlJCKl9m7QEgqOFwrSHhZLxSIj8tEDM",
  },
};
