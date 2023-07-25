import { ReactComponent as Star } from "../../images/shape-star.svg";
import { AllVotes, MaxScore, Score, Wrap } from "./styled";

export const Scores = ({ data }) => (
  <Wrap>
    <Star />
    <Score>{data.score}</Score>
    <MaxScore>/10</MaxScore>
    <AllVotes>{data.votes} votes</AllVotes>
  </Wrap>
);
