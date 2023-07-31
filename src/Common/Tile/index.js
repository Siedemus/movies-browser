import { Scores } from "../Scores/";
import {
  AdditionInfo,
  Box,
  Content,
  Description,
  Image,
  Info,
  Tag,
  Tags,
  TileWrap,
  Title,
  Subtitle,
} from "./styled";
import { images } from "../../apiURLs";
import { useSelector } from "react-redux";
import { selectGenres } from "../MainTail/genresSlice";

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

  return (
    <TileWrap>
      <Image src={`${images}${poster}`} alt={`${title} poster`} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Box>
          <AdditionInfo>Production:</AdditionInfo>
          <Info> {infoProduction}</Info>
        </Box>
        <Box>
          <AdditionInfo>Release date:</AdditionInfo>
          <Info> {infoDate}</Info>
        </Box>
        <Tags>
          {genres && tags ? (
            tags.map((tag) => (
              <Tag key={tag}>
                {genres.find((genre) => genre.id === tag).name}
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
