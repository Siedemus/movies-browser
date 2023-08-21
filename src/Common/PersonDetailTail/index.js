import { useDispatch } from "react-redux";
import { images } from "../../apiURLs";
import {
  AdditionInfo,
  Box,
  Content,
  Description,
  Image,
  Info,
  TileWrap,
  Title,
} from "./styled";
import { useEffect } from "react";
import noPoster from "../../Assets/Images/noPoster.png";
import { fetchGenres } from "../MainTail/genresSlice";

export const PersonDetailTile = ({
  title,
  dateOfBirth,
  placeOfBirth,
  poster,
  biography,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <TileWrap>
      <Image
        src={poster ? `${images}${poster}` : noPoster}
        alt={`${title} poster`}
      />
      <Content>
        <Title>{title}</Title>

        <Box>
          <AdditionInfo>Date of birth:&nbsp;</AdditionInfo>
          <Info> {dateOfBirth?.replace(/-/g, ".")}</Info>
        </Box>
        <Box>
          <AdditionInfo>Place of birth:&nbsp;</AdditionInfo>
          <Info> {placeOfBirth}</Info>
        </Box>
      </Content>
      <Description>{biography}</Description>
    </TileWrap>
  );
};
