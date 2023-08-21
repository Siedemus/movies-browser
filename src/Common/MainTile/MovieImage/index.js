import { ImageWrapper, MoviePosterWrap, Poster } from "./styled";
import { images } from "../../../apiURLs";
import noPoster from "../../../Assets/Images/noPoster.png";

export const MovieImage = ({ poster }) => {
  return (
    <MoviePosterWrap>
      <Poster
        noPoster={noPoster}
        background={poster ? `${images}${poster}` : noPoster}
      />
    </MoviePosterWrap>
  );
};
