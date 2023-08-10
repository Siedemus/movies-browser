import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { ItemPeopleList, PeopleListTitle, PeopleList } from "./styled";
import { PeopleListTile } from "../../common/TileList/TilePeople/index";
import { Container } from "../../common/Container";
import {
    selectPeopleList,
    selectTotalResult,
    fetchSearchPeopleLoad,
    fetchPeopleListLoad,
} from "./peopleSlice";
import { searchQueryParamName } from "../Navigation/Search/searchQueryParamName";
import { Pagination } from "../../common/Pagination";
/*import { resetPage, selectPage } from "Pagination/paginationSlice"; */

export const PeopleLists = () => {
    const popularPeople = useSelector(selectPeopleList);
    const dispatch = useDispatch();
    /*const page = useSelector(selectPage);*/
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);
    const totalResults = useSelector(selectTotalResult);
    const isLoad = useRef(true);

  /*  useEffect(() => {
        if (query !== "" && query !== null) {
            isLoad.current = false;
            dispatch(fetchSearchPeopleLoad(query));
        } else {
            isLoad.current = true;
            dispatch(fetchPeopleListLoad(page));
        }
    }, [dispatch, query, page]);

    useEffect(() => {
        dispatch(resetPage());
    }, [dispatch]);*/

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
        <Pagination />
    </Container>
};
