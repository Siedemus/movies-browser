import { useEffect } from "react";
import { MainTile } from "../../Common/MainTail";
import { Container, Header, Movie, MovieList } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectCurrentMoviePage,
  selectMoviesList,
  firstMoviePage,
  previousMoviePage,
  nextMoviePage,
  lastMoviePage,
  setMoviePageByQuery,
  selectStatus,
} from "./moviesSlice";
import { fetchGenres } from "../../Common/MainTail/genresSlice";
import { Pagination } from "../../Common/Pagination";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MoonLoader } from "react-spinners";
import { LoaderContainer } from "../../Common/LoaderContainer/styled";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const moviesData = useSelector(selectMoviesList);
  const moviesSatus = useSelector(selectStatus);

  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("page");

  useEffect(() => {
    dispatch(setMoviePageByQuery(parseInt(query)));
  }, [query, dispatch]);

  useEffect(() => {
    dispatch(fetchMovies());
    history.replace(`${location.pathname}?page=${currentMoviePage}`);
  }, [currentMoviePage, dispatch, history, location.pathname]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header>Popular movies</Header>
        <MovieList>
          {moviesSatus === "success" ? (
            <>
              {moviesData.map((movie) => (
                <Movie key={movie.poster_path}>
                  <MainTile
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    subtitle={movie.release_date.slice(0, 4)}
                    tags={movie.genre_ids}
                    rate={{
                      score: movie.vote_average,
                      votes: movie.vote_count,
                    }}
                  />
                </Movie>
              ))}
              <Pagination
                currentPage={currentMoviePage}
                firstPage={firstMoviePage}
                previousPage={previousMoviePage}
                nextPage={nextMoviePage}
                lastPage={lastMoviePage}
              />
            </>
          ) : moviesSatus === "loading" ? (
            <LoaderContainer>
              <MoonLoader color="#18181B" size={80} />
            </LoaderContainer>
          ) : moviesSatus === "error" ? (
            <div>big error</div>
          ) : null}
        </MovieList>
      </Container>
    </>
  );
};

export default MoviesPage;
