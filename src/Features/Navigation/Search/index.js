import { useDispatch } from "react-redux";
import { Wrapper, Input } from "./styled";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParametrs";
import { searchQueryParamName } from "./searchQueryParamName";

export const Search = () => {
    const dispatch = useDispatch();
    const moviesMatch = useRouteMatch("/movies");
    const peopleMatch = useRouteMatch("/people");
    const placeholder = moviesMatch
        ? "Search for movies..."
        : "Search for people...";

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter(
            searchQueryParamName,
            target.value.trim() !== "" ? target.value : undefined,
            peopleMatch ? "people" : undefined,
            moviesMatch ? "movies" : undefined
        );

    };

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