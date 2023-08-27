import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Button,
  Container,
  Vector,
  Important,
  ButtonText,
} from "./styled";

export const Pagination = ({
  currentPage,
  firstPage,
  previousPage,
  nextPage,
  lastPage,
  totalPages,
}) => {
  const dispatch = useDispatch();

  const pagePrefix = totalPages >= 500 ? 500 : totalPages;

  return (
    <Container>
      <Button
        onClick={() => dispatch(firstPage())}
        disabled={currentPage === 1 ? true : false}
      >
        <Vector alt="first page" gray={+true} />
        <Vector alt="first page" mobile={+true} gray={+true} />
        <ButtonText>First</ButtonText>
      </Button>
      <Button
        onClick={() => dispatch(previousPage())}
        disabled={currentPage === 1 ? true : false}
      >
        <Vector alt="previous page" gray={+true} />
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
        disabled={currentPage === pagePrefix ? true : false}
      >
        <ButtonText>Next</ButtonText>
        <Vector next={+true} alt="next page" />
      </Button>
      <Button
        disabled={currentPage === pagePrefix ? true : false}
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
