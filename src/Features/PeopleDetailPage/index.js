import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, selectPerson, selectStatus } from "./personSlice";
import { useEffect } from "react";
import { LoaderContainer } from "../../Common/LoaderContainer/styled";
import { MoonLoader } from "react-spinners";
import { ErrorPage } from "../../Common/ErrorPage";
import { PersomDetailWrap } from "./styled";
import { PersonDetailTile } from "../../Common/Tile";

const PeopleDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchPerson(id));
  }, [dispatch, id]);

  return status === "success" ? (
    <>
      <PersomDetailWrap key={person.profile_path}>
        <PersonDetailTile
          id={person.id}
          poster={person.profile_path}
          title={person.name}
          dateOfBirth={person.birthday}
          placeOfBirth={person.place_of_birth}
          biography={person.biography}
        />
      </PersomDetailWrap>
    </>
  ) : status === "loading" ? (
    <LoaderContainer>
      <MoonLoader color="#18181B" size={80} />
    </LoaderContainer>
  ) : status === "error" ? (
    <ErrorPage />
  ) : null;
};

export default PeopleDetailPage;
