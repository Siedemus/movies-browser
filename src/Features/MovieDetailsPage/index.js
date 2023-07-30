import { useEffect, useState } from "react";
import { details_url } from "../../apiURLs";
import { Container, Header } from "../MoviesPage/styled";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDdhNDgyZjBmNGQ2YTYzMjMyZWQ5NDYwNDY5ODc5NyIsInN1YiI6IjY0YzJlYzIzNjZhMGQzMDBlN2Q1M2I1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HucdpQMGjiivmlJCKl9m7QEgqOFwrSHhZLxSIj8tEDM",
      },
    };

    fetch(details_url + `${id}`, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [id]);
  return (
    <Container>
      <Header>{movie?.original_title}</Header>
    </Container>
  );
};

export default MovieDetailsPage;
