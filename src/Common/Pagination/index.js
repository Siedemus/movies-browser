import { useDispatch } from "react-redux";
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
}) => {
  const dispatch = useDispatch();

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
        <Important> 500</Important>
      </Text>
      <Button next={+true} onClick={() => dispatch(nextPage())}>
        <ButtonText>Next</ButtonText>
        <Vector next={+true} alt="next page" />
      </Button>
      <Button next={+true} onClick={() => dispatch(lastPage())}>
        <ButtonText>Last</ButtonText>
        <Vector next={+true} mobile={+true} alt="last page" />
        <Vector next={+true} alt="last page" />
      </Button>
    </Container>
  );
};