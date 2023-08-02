import { useEffect, useState } from "react";
import { credits_url, details_url, poster_path } from "../../apiURLs";
import { useParams } from "react-router-dom";
import {
  Panel,
  Wrap,
  Container,
  TileContainer,
  Header,
  PosterPath,
  PeopleList,
  PeopleHeader,
} from "./styled";
import { Tile } from "../../Common/Tile";
import { ScoresDetails } from "./ScoresDetails/index";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMoviesList,
} from "../../Features/MoviesPage/moviesSlice";
import { fetchGenres } from "../../Common/MainTail/genresSlice";
import { MainTile } from "../../Common/MainTail";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [persons, setPersons] = useState(null);
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

    const idCredits = credits_url.replace("{movie_id}", id);

    fetch(idCredits, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPersons(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [id]);

  const dispatch = useDispatch();

  const moviesData = useSelector(selectMoviesList);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  return movie ? (
    <>
      <Wrap>
        <PosterPath
          src={`${poster_path}${movie.backdrop_path}`}
          alt={`${movie.title}`}
        >
          <Panel>
            <Container>
              <Header>{movie.original_title}</Header>
              <ScoresDetails
                data={{ score: movie.vote_average, votes: movie.vote_count }}
              />
            </Container>
          </Panel>
        </PosterPath>
      </Wrap>
      {moviesData ? (
        <TileContainer key={movie.poster_path}>
          <Tile
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            subtitle={movie.release_date.slice(0, 4)}
            infoProduction={movie.production_countries
              .map(({ name }) => name)
              .join(", ")}
            infoDate={movie.release_date}
            tags={movie.genres.map(({ id }) => id)}
            rate={{ score: movie.vote_average, votes: movie.vote_count }}
            filmDescription={movie.overview}
          />
          <PeopleHeader>Cast</PeopleHeader>
          <PeopleList>
            {persons
              ? persons.cast.slice(0, 16).map((person) => (
                  //to do: change MainTail to Oleksander version
                  <MainTile
                    id={id}
                    poster={person.profile_path}
                    title={person.name}
                    subtitle={person.character}
                    tags={[]}
                  />
                ))
              : null}
          </PeopleList>
          <PeopleHeader>Crew</PeopleHeader>
          <PeopleList>
            {persons
              ? persons.crew.slice(0, 8).map((person) => (
                  //to do: change MainTail to Oleksander version
                  <MainTile
                    id={id}
                    poster={person.profile_path}
                    title={person.name}
                    subtitle={person.job}
                    tags={[]}
                  />
                ))
              : null}
          </PeopleList>
        </TileContainer>
      ) : null}
      ;
    </>
  ) : null;
};

export default MovieDetailsPage;
