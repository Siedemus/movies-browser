import { poster_path } from "../../apiURLs";
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
import { MainTile } from "../../Common/MainTail";
import { useMovieDetails } from "./getMovieDetails";
import { useMovieCredits } from "./getMovieCredits";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie] = useMovieDetails(id);
  const [credits] = useMovieCredits(id);

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
        <PeopleHeader>Cast</PeopleHeader>
        <PeopleList>
          {credits
            ? credits.cast.slice(0, 16).map((person) => (
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
          {credits
            ? credits.crew.slice(0, 8).map((person) => (
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
    </>
  ) : null;
};

export default MovieDetailsPage;
