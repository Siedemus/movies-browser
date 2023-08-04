import { useDispatch, useSelector } from "react-redux";
import { Text, Button, Container, Vector, Important } from "./styled";
import {
  firstPage,
  lastPage,
  nextPage,
  previousPage,
  selectCurrentPage,
} from "../MoviesPage/moviesSlice";

export const Pagination = () => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  return (
    <Container>
      <Button onClick={() => dispatch(firstPage())}>
        <Vector alt="first page" />
        First
      </Button>
      <Button onClick={() => dispatch(previousPage())}>
        <Vector alt="previous page" />
        Previous
      </Button>
      <Text>
        Page <Important>{currentPage}</Important> of
        <Important> 500</Important>
      </Text>
      <Button next={+true} onClick={() => dispatch(nextPage())}>
        Next
        <Vector next={+true} alt="next page" />
      </Button>
      <Button next={+true} onClick={() => dispatch(lastPage())}>
        Last
        <Vector next={+true} alt="last page" />
      </Button>
    </Container>
  );
};
