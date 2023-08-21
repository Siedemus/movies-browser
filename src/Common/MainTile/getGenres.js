import { genres } from "../../apiURLs";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDdhNDgyZjBmNGQ2YTYzMjMyZWQ5NDYwNDY5ODc5NyIsInN1YiI6IjY0YzJlYzIzNjZhMGQzMDBlN2Q1M2I1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HucdpQMGjiivmlJCKl9m7QEgqOFwrSHhZLxSIj8tEDM",
  },
};

export const getGenres = async () => {
  const response = await fetch(genres, options);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
