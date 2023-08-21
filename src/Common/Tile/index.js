import { useEffect } from "react";
import { Scores } from "../Scores/";
import {
  AdditionInfo,
  Box,
  Content,
  Description,
  Image,
  Info,
  InfoLong,
  InfoShort,
  Tag,
  Tags,
  TileWrap,
  Title,
  Subtitle,
} from "./styled";
import { useDispatch } from "react-redux";
import { fetchGenres } from "../../Common/MainTile/genresSlice";
import { images } from "../../apiURLs";
import { useSelector } from "react-redux";
import { selectGenres } from "../MainTile/genresSlice";
import noPoster from "../../Assets/Images/noPoster.png";

export const Tile = ({
  title,
  subtitle,
  infoProduction,
  infoDate,
  tags,
  poster,
  rate,
  filmDescription,
}) => {
  const genres = useSelector(selectGenres);
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
        <Subtitle>{subtitle}</Subtitle>
        <Box>
          <AdditionInfo>Production:&nbsp;</AdditionInfo>
          <InfoLong>
            {" "}
            {infoProduction?.map(({ name }) => name).join(", ")}
          </InfoLong>
          <InfoShort>
            {infoProduction?.map(({ iso_3166_1 }) => iso_3166_1).join(", ")}
          </InfoShort>
        </Box>
        <Box>
          <AdditionInfo>Release date:&nbsp;</AdditionInfo>
          <Info> {infoDate?.replace(/-/g, ".")}</Info>
        </Box>
        <Tags>
          {genres && tags ? (
            tags?.map((tag) => (
              <Tag key={tag}>
                {genres?.find((genre) => genre.id === tag).name}
              </Tag>
            ))
          ) : (
            <Tag>No Data</Tag>
          )}
        </Tags>
        <Scores data={rate} />
      </Content>
      <Description>{filmDescription}</Description>
    </TileWrap>
  );
};
