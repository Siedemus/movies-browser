import { useEffect, useState } from "react";
import { details_url, poster_path } from "../../apiURLs";
import { useParams } from "react-router-dom";
import {
  Panel,
  Wrap,
  Container,
  TileContainer,
  Header,
  PosterPath,
} from "./styled";
import { Tile } from "../../Common/Tile";
import { Scores } from "../../Common/Scores/index";

const MovieDetailsPage = (backdrop_path, title) => {
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

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDdhNDgyZjBmNGQ2YTYzMjMyZWQ5NDYwNDY5ODc5NyIsInN1YiI6IjY0YzJlYzIzNjZhMGQzMDBlN2Q1M2I1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HucdpQMGjiivmlJCKl9m7QEgqOFwrSHhZLxSIj8tEDM",
      },
    };

    fetch(backdrop_path + `${id}`, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [id]);

  return movie ? (
    <>
      <Wrap>
        <PosterPath
          src={`${poster_path}${movie.backdrop_path}`}
          alt={`${title}`}
          // poster={movie.backdrop_path}
        >
          <Panel>
            <Container>
              <Header>{movie.original_title}</Header>
              <Scores data={{ score: movie.vote_average }} />
              <Scores data={{ votes: movie.vote_count }} />
            </Container>
          </Panel>
        </PosterPath>
      </Wrap>
      <TileContainer key={movie.poster_path}>
        <Tile
          id={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          subtitle={movie.release_date}
          infoProduction={movie.production_countries
            .map(({ name }) => name)
            .join(", ")}
          infoDate={movie.release_date}
          tags={movie.genre_ids}
          rate={{ score: movie.vote_average, votes: movie.vote_count }}
          filmDescription={movie.overview}
        />
      </TileContainer>
    </>
  ) : null;
};

export default MovieDetailsPage;
