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
  selectTotalPages,
  selectTotalResults,
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
import { selectQuery } from "../Navigation/Search/searchSlice";
import { NoResults } from "../../Common/NoResults/styled";
import noResultsPoster from "../../Assets/Images/noResults.svg";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const popularPeople = useSelector(selectPeopleList);
  const peopleStatus = useSelector(selectStatus);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  const searchQuery = useSelector(selectQuery);

  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("page");

  useEffect(() => {
    dispatch(setPeoplePageByQuery(parseInt(query)));
  }, [query]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", currentPeoplePage);
    dispatch(fetchPeopleListLoad());
    history.replace(`${location.pathname}?${searchParams}`);
  }, [currentPeoplePage]);

  return (
    <Container>
      <Header>
        {searchQuery !== ""
          ? totalResults
            ? `Search results for “${searchQuery}” (${totalResults})`
            : `Sorry, there are no results for “${searchQuery}”`
          : "Popular people"}
      </Header>
      {peopleStatus === "success" && totalResults ? (
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
      ) : peopleStatus === "loading" ? (
        <LoaderContainer>
          <MoonLoader color="#18181B" size={80} />
        </LoaderContainer>
      ) : peopleStatus === "error" ? (
        <ErrorPage />
      ) : peopleStatus === "success" && !totalResults ? (
        <NoResults src={noResultsPoster} />
      ) : null}
      {peopleStatus === "success" && totalResults && totalPages > 1 ? (
        <Pagination
          currentPage={currentPeoplePage}
          firstPage={firstPeoplePage}
          previousPage={previousPeoplePage}
          nextPage={nextPeoplePage}
          lastPage={lastPeoplePage}
          totalPages={totalPages}
        />
      ) : null}
    </Container>
  );
};

export default PeoplePage;
