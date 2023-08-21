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
  selectTotalResults,
  selectTotalPages,
} from "./moviesSlice";
import { fetchGenres } from "../../Common/MainTail/genresSlice";
import { Pagination } from "../../Common/Pagination";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MoonLoader } from "react-spinners";
import { LoaderContainer } from "../../Common/LoaderContainer/styled";
import { ErrorPage } from "../../Common/ErrorPage";
import { selectQuery } from "../Navigation/Search/searchSlice";
import { NoResults } from "../../Common/NoResults/styled";
import noResultsPoster from "../../Assets/Images/noResults.svg";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const moviesData = useSelector(selectMoviesList);
  const moviesSatus = useSelector(selectStatus);
  const totalResults = useSelector(selectTotalResults);
  const searchQuery = useSelector(selectQuery);
  const totalPages = useSelector(selectTotalPages);

  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("page");

  useEffect(() => {
    dispatch(setMoviePageByQuery(parseInt(query)));
  }, [query]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", currentMoviePage);
    dispatch(fetchMovies());
    history.replace(`${location.pathname}?${searchParams}`);
  }, [currentMoviePage]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <>
      <Container>
        <Header>
          {searchQuery !== ""
            ? totalResults
              ? `Search results for “${searchQuery}” (${totalResults})`
              : `Sorry, there are no results for “${searchQuery}”`
            : "Popular Movies"}
        </Header>
        {moviesSatus === "success" && totalResults ? (
          <MovieList>
            {moviesData.map((movie) => (
              <Movie key={movie.id}>
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
          </MovieList>
        ) : moviesSatus === "loading" ? (
          <LoaderContainer>
            <MoonLoader color="#18181B" size={80} />
          </LoaderContainer>
        ) : moviesSatus === "error" ? (
          <ErrorPage />
        ) : !totalResults ? (
          <NoResults src={noResultsPoster} />
        ) : null}
        {moviesSatus === "success" && totalResults && totalPages > 1 ? (
          <Pagination
            currentPage={currentMoviePage}
            firstPage={firstMoviePage}
            previousPage={previousMoviePage}
            nextPage={nextMoviePage}
            lastPage={lastMoviePage}
            totalPages={totalPages}
          />
        ) : null}
      </Container>
    </>
  );
};

export default MoviesPage;
