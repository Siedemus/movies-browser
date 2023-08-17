import { useEffect } from "react";

export const useManualSearchParamChange = (
  location,
  dispatch,
  query,
  onSearchChange,
  searchParams
) => {
  useEffect(() => {
    const newQuery = searchParams.get("search") || "";
    if (newQuery !== query) {
      dispatch(onSearchChange(newQuery));
    }
  }, [location.search]);
};
