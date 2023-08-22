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
  BoxWrap,
  AdditionInfoLong,
  AdditionInfoShort,
} from "./styled";
import { useEffect } from "react";
import noPoster from "../../Assets/Images/noPoster.png";
import { fetchGenres } from "../MainTile/genresSlice";

export const PersonDetailTile = ({
  title,
  dateOfBirth,
  placeOfBirth,
  poster,
  biography,
}) => {
  const dispatch = useDispatch();
  const formattedDate = new Date(dateOfBirth).toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

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
        <BoxWrap>
          <Box>
            <AdditionInfo>
              <AdditionInfoLong>Date of birth:&nbsp;</AdditionInfoLong>
              <AdditionInfoShort>Birth:&nbsp;</AdditionInfoShort>
            </AdditionInfo>
            <Info> {formattedDate}</Info>
          </Box>
          <Box>
            <AdditionInfo>Place of birth:&nbsp;</AdditionInfo>
            <Info> {placeOfBirth}</Info>
          </Box>
        </BoxWrap>
      </Content>
      <Description>{biography}</Description>
    </TileWrap>
  );
};
