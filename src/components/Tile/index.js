import poster from "../../images/poster.png";
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
  Year,
} from "./styled";

export const Tile = ({
  title,
  year,
  infoProduction,
  infoDate,
  tag,
  filmDescription,
}) => (
  <TileWrap>
    <Image src={poster} alt="" />
    <Content>
      <Title>{title}</Title>
      <Year>{year}</Year>
      <Box>
        <AdditionInfo>Production:</AdditionInfo>
        <Info> {infoProduction}</Info>
      </Box>
      <Box>
        <AdditionInfo>Release date:</AdditionInfo>
        <Info> {infoDate}</Info>
      </Box>
      <Tags>
        <Tag>{tag}</Tag>
        <Tag>{tag}</Tag>
        <Tag>{tag}</Tag>
      </Tags>
      <Scores data={{ score: 7.6, votes: 643 }} />
    </Content>
    <Description>{filmDescription}</Description>
  </TileWrap>
);
