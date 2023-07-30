import { useEffect } from "react";
import { MainTile } from "../../Common/MainTail";
import { Container, Header, Movie, MovieList } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMoviesList } from "./moviesSlice";
import { fetchGenres } from "../../Common/MainTail/genresSlice";

const MoviesPage = () => {
  const dispatch = useDispatch();

  const moviesData = useSelector(selectMoviesList);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <Container>
      <Header>Popular movies</Header>
      <MovieList>
        {moviesData
          ? moviesData.map((movie) => (
              <Movie key={movie.poster_path}>
                <MainTile
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  subtitle={movie.release_date}
                  tags={movie.genre_ids}
                  rate={{ score: movie.vote_average, votes: movie.vote_count }}
                />
              </Movie>
            ))
          : null}
      </MovieList>
    </Container>
  );
};

export default MoviesPage;
