import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Wrapper, Input } from "./styled";
import { searchQueryParamName } from "./searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameter";
/*import { firstPage } from "Pagination";*/

export const Search = () => {
    const dispatch = useDispatch();
    const moviesMatch = useRouteMatch("/movies");
    const peopleMatch = useRouteMatch("/people");
    const placeholder = moviesMatch
        ? "Search for movies..."
        : "Search for people...";

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    /*const onInputChange = ({ target }) => {
        replaceQueryParameter(
            searchQueryParamName,
            target.value.trim() !== "" ? target.value : undefined,
            peopleMatch ? "people" : undefined,
            moviesMatch ? "movies" : undefined
        );
        dispatch(firstPage()); 
    };*/

    return (
        <>
            <Wrapper>
                <Input
                    placeholder={placeholder}
                    value={query || ""}
                    onChange={onInputChange}
                />
            </Wrapper>
        </>
    );
};
