import { Wrapper, Input } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { onSearchChange, selectQuery } from "./searchSlice";
import { fetchMovies } from "../../MoviesPage/moviesSlice";
import { fetchPeopleListLoad } from "../../PeoplePage/peopleSlice";
import { useManualSearchParamChange } from "./useManualSearchParamChange";
import { useReplaceSearchParam } from "./useReplaceSearchParam";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

export const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const searchParams = new URLSearchParams(location.search);

  useManualSearchParamChange(
    location,
    dispatch,
    query,
    onSearchChange,
    searchParams
  );
  useReplaceSearchParam(
    location,
    query,
    history,
    dispatch,
    fetchMovies,
    searchParams,
    fetchPeopleListLoad
  );

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      dispatch(onSearchChange(""));
    } else {
      dispatch(onSearchChange(target.value));
    }
  };

  return (
    <>
      <Wrapper>
        <Input
          placeholder="Search for movies..."
          onChange={(e) => onInputChange(e)}
          value={query}
        />
      </Wrapper>
    </>
  );
};
