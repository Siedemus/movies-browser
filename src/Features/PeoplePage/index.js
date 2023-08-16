import { Container, Header, ItemPeopleList, PeopleList } from "./styled";
import { PeopleListTile } from "../../Common/TilePeople/index";
import { useSelector } from "react-redux";
import {
    firstPeoplePage,
    lastPeoplePage,
    nextPeoplePage,
    previousPeoplePage,
    selectCurrentPeoplePage,
    selectPeopleList,
    selectStatus
} from "./peopleSlice";
import { LoaderContainer } from "../../Common/LoaderContainer/styled"
import { MoonLoader } from "react-spinners";
import { ErrorPage } from "../../Common/ErrorPage";
import { Pagination } from "../../Common/Pagination/index";

const PeoplePage = () => {
    const currentPeoplePage = useSelector(selectCurrentPeoplePage);
    const popularPeople = useSelector(selectPeopleList);
    const peopleStatus = useSelector(selectStatus);

    <Container>
        <Header>Popular People</Header>
        <PeopleList>
            {peopleStatus === "success" ? (
                <>
                    {popularPeople.map((people) => (
                        <ItemPeopleList key={people.id}>
                            <PeopleListTile
                                id={people.id}
                                poster={people.profile_path}
                                name={people.name}
                            />
                        </ItemPeopleList>
                    ))}
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
        </PeopleList>
    </Container>


}

export default PeoplePage;
