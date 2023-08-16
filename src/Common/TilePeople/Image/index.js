import { ImageWrapper, Poster } from "./styled";
import noPersonPoster from "../../../Assets/Images/noPersonPoster.png";

export const PersonImage = ({ poster }) => {
  const images = "https://image.tmdb.org/t/p/w185";

  return (
    <ImageWrapper>
      <Poster background={poster ? `${images}${poster}` : noPersonPoster} />
    </ImageWrapper>
  );
};
