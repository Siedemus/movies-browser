import { ReactComponent as Star } from "../../../Assets/Images/shape-star.svg";
import { AllVotes, MaxScore, Score, Wrap, ScoresContainer } from "./styled";

export const ScoresDetails = ({ data }) => (
  <Wrap>
    <ScoresContainer>
      <Star />
      <Score>{data.score?.toFixed(1)}</Score>
      <MaxScore>/10</MaxScore>
    </ScoresContainer>
    <AllVotes>{data.votes} votes</AllVotes>
  </Wrap>
);
