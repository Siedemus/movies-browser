import { ImageWrapper, Poster, NoPerson } from "./styled";
import { images } from "../../../apiURLs";

export const PersonImage = ({ poster }) => {
  return (
    <ImageWrapper>
      {poster === null ? (
        <NoPerson />
      ) : (
        <Poster background={`${images}${poster}`} />
      )}
    </ImageWrapper>
  );
};
