import { posterPath } from "../../apiURLs";
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
import { fetchCredits, selectCredits } from "./creditsSlice";
import { fetchDetails, selectDetails, selectStatus } from "./detailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PeopleListTile } from "../../Common/TilePeople";
import { LoaderContainer } from "../../Common/LoaderContainer/styled";
import { MoonLoader } from "react-spinners";
import { ErrorPage } from "../../Common/ErrorPage";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const credits = useSelector(selectCredits);
  const movie = useSelector(selectDetails);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchCredits(id));
    dispatch(fetchDetails(id));
  }, [id]);

  return status === "success" ? (
    <>
      <Wrap>
        <PosterPath
          src={`${posterPath}${movie.backdrop_path}`}
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
      <TileContainer key={movie.poster_path}>
        <Tile
          id={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          subtitle={movie.release_date.slice(0, 4)}
          infoProduction={movie.production_countries}
          infoDate={movie.release_date}
          tags={movie.genres.map(({ id }) => id)}
          rate={{ score: movie.vote_average, votes: movie.vote_count }}
          filmDescription={movie.overview}
        />
        <PeopleHeader>Cast ({credits?.cast.length}) </PeopleHeader>
        <PeopleList>
          {credits
            ? credits?.cast.map((person) => (
                <PeopleListTile
                  id={person.id}
                  poster={person.profile_path}
                  name={person.name}
                  character={person.character}
                />
              ))
            : null}
        </PeopleList>
        <PeopleHeader>Crew ({credits?.crew.length})</PeopleHeader>
        <PeopleList>
          {credits
            ? credits?.crew.map((person) => (
                <PeopleListTile
                  id={person.id}
                  poster={person.profile_path}
                  name={person.name}
                  character={person.job}
                />
              ))
            : null}
        </PeopleList>
      </TileContainer>
    </>
  ) : status === "loading" ? (
    <LoaderContainer>
      <MoonLoader color="#18181B" size={80} />
    </LoaderContainer>
  ) : status === "error" ? (
    <ErrorPage />
  ) : null;
};

export default MovieDetailsPage;
