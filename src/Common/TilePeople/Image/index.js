import { ImageWrapper, Poster } from "./styled";
import { images } from "../../../apiURLs";
import noPersonPoster from "../../../Assets/Images/noPersonPoster.png";

export const PersonImage = ({ poster }) => {
  return (
    <ImageWrapper>
      <Poster
        noPoster={noPersonPoster}
        background={poster ? `${images}${poster}` : noPersonPoster}
      />
    </ImageWrapper>
  );
};
