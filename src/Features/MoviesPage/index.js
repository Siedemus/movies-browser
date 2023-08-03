import { useEffect } from "react";
import { MainTile } from "../../Common/MainTail";
import { Container, Header, Movie, MovieList } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectCurrentPage,
  selectMoviesList,
} from "./moviesSlice";
import { fetchGenres } from "../../Common/MainTail/genresSlice";
import { Pagination } from "../Pagination";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  const moviesData = useSelector(selectMoviesList);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [currentPage]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <>
      <Container>
        <Header>Popular movies</Header>
        <MovieList>
          {moviesData
            ? moviesData.map((movie) => (
                <Movie key={movie.poster_path}>
                  <MainTile
                    poster={movie.poster_path}
                    title={movie.title}
                    subtitle={movie.release_date}
                    tags={movie.genre_ids}
                    rate={{
                      score: movie.vote_average,
                      votes: movie.vote_count,
                    }}
                  />
                </Movie>
              ))
            : null}
        </MovieList>
        <Pagination />
      </Container>
    </>
  );
};

export default MoviesPage;
