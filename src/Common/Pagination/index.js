import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Button,
  Container,
  Vector,
  Important,
  ButtonText,
} from "./styled";
import { selectTotalPages } from "../../Features/MoviesPage/moviesSlice";

export const Pagination = ({
  currentPage,
  firstPage,
  previousPage,
  nextPage,
  lastPage,
}) => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);

  return (
    <Container>
      <Button onClick={() => dispatch(firstPage())}>
        <Vector alt="first page" />
        <Vector alt="first page" mobile={+true} />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={() => dispatch(previousPage())}>
        <Vector alt="previous page" />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Text>
        Page <Important>{currentPage}</Important> of
        <Important> {totalPages > 500 ? "500" : totalPages}</Important>
      </Text>
      <Button
        next={+true}
        onClick={() =>
          dispatch(nextPage(totalPages > 500 ? "500" : totalPages))
        }
      >
        <ButtonText>Next</ButtonText>
        <Vector next={+true} alt="next page" />
      </Button>
      <Button
        next={+true}
        onClick={() =>
          dispatch(lastPage(totalPages > 500 ? "500" : totalPages))
        }
      >
        <ButtonText>Last</ButtonText>
        <Vector next={+true} mobile={+true} alt="last page" />
        <Vector next={+true} alt="last page" />
      </Button>
    </Container>
  );
};
