import { Container, Header, ItemPeopleList, PeopleList } from "./styled";
import { PeopleListTile } from "../../Common/TilePeople/index";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleListLoad,
  firstPeoplePage,
  lastPeoplePage,
  nextPeoplePage,
  previousPeoplePage,
  selectCurrentPeoplePage,
  selectPeopleList,
  selectStatus,
  setPeoplePageByQuery,
} from "./peopleSlice";
import { LoaderContainer } from "../../Common/LoaderContainer/styled";
import { MoonLoader } from "react-spinners";
import { ErrorPage } from "../../Common/ErrorPage";
import { Pagination } from "../../Common/Pagination/index";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const popularPeople = useSelector(selectPeopleList);
  const peopleStatus = useSelector(selectStatus);

  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("page");

  useEffect(() => {
    dispatch(setPeoplePageByQuery(parseInt(query)));
  }, [query, dispatch]);

  useEffect(() => {
    dispatch(fetchPeopleListLoad());
    history.replace(`${location.pathname}?page=${currentPeoplePage}`);
  }, [currentPeoplePage, dispatch, history, location.pathname]);

  return (
    <Container>
      <Header>Popular People</Header>
      {peopleStatus === "success" ? (
        <>
          <PeopleList>
            {popularPeople.map((people) => (
              <ItemPeopleList key={people.id}>
                <PeopleListTile
                  id={people.id}
                  poster={people.profile_path}
                  name={people.name}
                />
              </ItemPeopleList>
            ))}
          </PeopleList>
          <Pagination
            currentPage={currentPeoplePage}
            firstPage={firstPeoplePage}
            previousPage={previousPeoplePage}
            nextPage={nextPeoplePage}
            lastPage={lastPeoplePage}
          />
        </>
      ) : peopleStatus === "loading" ? (
        <LoaderContainer>
          <MoonLoader color="#18181B" size={80} />
        </LoaderContainer>
      ) : peopleStatus === "error" ? (
        <ErrorPage />
      ) : null}
    </Container>
  );
};

export default PeoplePage;
