import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, selectPerson, selectStatus } from "./personSlice";
import { useEffect } from "react";
import { LoaderContainer } from "../../Common/LoaderContainer/styled";
import { MoonLoader } from "react-spinners";
import { ErrorPage } from "../../Common/ErrorPage";
import {
  FilmHeader,
  FilmList,
  PersonDetailContainer,
  PersomDetailWrap as PersonDetailWrap,
} from "./styled";
import { PersonDetailTile } from "../../Common/Tile";
import { fetchPersonCredits, selectPersonCredits } from "./personCreditsSlice";
import { MainTile } from "../../Common/MainTile";

const PeopleDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const personCredits = useSelector(selectPersonCredits);
  const person = useSelector(selectPerson);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchPerson(id));
    dispatch(fetchPersonCredits(id));
  }, [dispatch, id]);

  return status === "success" ? (
    <PersonDetailContainer>
      <PersonDetailWrap key={person.profile_path}>
        <PersonDetailTile
          id={person.id}
          poster={person.profile_path}
          title={person.name}
          dateOfBirth={person.birthday}
          placeOfBirth={person.place_of_birth}
          biography={person.biography}
        />
      </PersonDetailWrap>
      <FilmHeader>Movies - cast ({personCredits?.cast.length})</FilmHeader>

      <FilmList>
        {personCredits
          ? personCredits.cast?.map((combined_credits) => (
              <MainTile
                id={combined_credits.id}
                poster={combined_credits.poster_path}
                title={combined_credits.title}
                subtitle={combined_credits.release_date?.slice(0, 4)}
                tags={combined_credits.genre_ids}
                rate={{
                  score: combined_credits.vote_average,
                  votes: combined_credits.vote_count,
                }}
              />
            ))
          : null}
      </FilmList>
      <FilmHeader>Movies - crew ({personCredits?.crew.length})</FilmHeader>
      <FilmList>
        {personCredits
          ? personCredits.crew?.map((combined_credits) => (
              <MainTile
                id={combined_credits.id}
                poster={combined_credits.poster_path}
                title={combined_credits.title}
                subtitle={combined_credits.release_date?.slice(0, 4)}
                tags={combined_credits.genre_ids}
                rate={{
                  score: combined_credits.vote_average,
                  votes: combined_credits.vote_count,
                }}
              />
            ))
          : null}
      </FilmList>
    </PersonDetailContainer>
  ) : status === "loading" ? (
    <LoaderContainer>
      <MoonLoader color="#18181B" size={80} />
    </LoaderContainer>
  ) : status === "error" ? (
    <ErrorPage />
  ) : null;
};

export default PeopleDetailPage;
