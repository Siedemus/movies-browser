import { ReactComponent as Star } from "../../../Assets/Images/shape-star.svg";
import { AllVotes, Score, Wrap } from "./styled";

export const MainTailScores = ({ data }) => (
  <Wrap>
    <Star />
    <Score>{data.score}</Score>

    <AllVotes>{data.votes} votes</AllVotes>
  </Wrap>
);
