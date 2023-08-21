export const images = "https://image.tmdb.org/t/p/w300";
export const posterPath = "https://image.tmdb.org/t/p/w1280";
export const movies = "https://api.themoviedb.org/3/discover/movie";
export const genres = "https://api.themoviedb.org/3/genre/movie/list";
export const detailsUrl = "https://api.themoviedb.org/3/movie/";
export const creditsUrl =
  "https://api.themoviedb.org/3/movie/{movie_id}/credits";
export const searchMovie =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US";
export const peopleUrl = "https://api.themoviedb.org/3/person/popular";
export const searchPeople = "https://api.themoviedb.org/3/search/person?";
export const detailPersonUrl =
  "https://api.themoviedb.org/3/person/{person_id}";
export const personCreditsUrl =
  "https://api.themoviedb.org/3/person/{person_id}/combined_credits";
export const getAuthorizationOption = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDdhNDgyZjBmNGQ2YTYzMjMyZWQ5NDYwNDY5ODc5NyIsInN1YiI6IjY0YzJlYzIzNjZhMGQzMDBlN2Q1M2I1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HucdpQMGjiivmlJCKl9m7QEgqOFwrSHhZLxSIj8tEDM",
  },
};
