import { ImageWrapper, Poster, NoPerson } from "./styled";
import { images } from "../../../apiURLs";
import noPersonPoster from "../../../Assets/Images/noPersonPoster.png";

export const PersonImage = ({ poster }) => {
  return (
    <ImageWrapper>
      <Poster background={poster ? `${images}${poster}` : noPersonPoster} />
    </ImageWrapper>
  );
};
