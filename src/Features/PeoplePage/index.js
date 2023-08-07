import { useDispatch, useSelector } from "react-redux";
import {useRef } from "react";
import { useLocation } from "react-router-dom";

import { PeopleListTitle, PeopleList, ItemPeopleList } from "./styled"
import { Container } from "../../Common/Container/index";
import { PeopleListTile } from "../../Common/TilePeople/index";
import {
    selectPeopleList,
    selectTotalResult,
} from "./peopleSlice";
import { searchQueryParamName } from "../../Features/Navigation/Search/searchQueryParamName";


export const PeoplePage = () => {
    const popularPeople = useSelector(selectPeopleList);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);
    const totalResults = useSelector(selectTotalResult);
    const isLoad = useRef(true);


        <Container>
            <PeopleListTitle>
                {!isLoad.current
                    ? `Search results for "${query}" (${totalResults})`
                    : "Popular People"}
            </PeopleListTitle>
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
        </Container>
};