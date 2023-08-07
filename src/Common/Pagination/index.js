import { useDispatch } from "react-redux";
import { Text, Button, Container, Vector, Important } from "./styled";

export const Pagination = ({
  currentPage,
  firstPage,
  previousPage,
  nextPage,
  lastPage,
}) => {
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
