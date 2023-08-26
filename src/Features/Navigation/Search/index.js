import { Wrapper, Input } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, selectQuery } from "./searchSlice";
import { useReplaceSearchParam } from "./useReplaceSearchParam";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

export const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParameter = new URLSearchParams(location.search).get("search");
  const URLQuery = searchParameter === null ? "" : searchParameter;
  const [value, setValue] = useState(URLQuery);
  const replaceSearchParam = useReplaceSearchParam();

  const placeholderText = location.pathname.includes("/movies")
    ? "Search for movies..."
    : "Search for people...";

  useEffect(() => {
    dispatch(setQuery(value));
  }, [value]);

  useEffect(() => {
    setValue(URLQuery);
  }, [searchParameter]);

  const onInputChange = ({ target }) => {
    setValue(target.value);
    replaceSearchParam({
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <>
      <Wrapper>
        <Input
          placeholder={placeholderText}
          onChange={(e) => onInputChange(e)}
          value={value}
        />
      </Wrapper>
    </>
  );
};
