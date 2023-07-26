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

export const Tile = () => (
  <TileWrap>
    <Image src={poster} alt="" />
    <Content>
      <Title>Mulan</Title>
      <Year>2020</Year>
      <Box>
        <AdditionInfo>Production:</AdditionInfo>
        <Info> China USA</Info>
      </Box>
      <Box>
        <AdditionInfo>Release date:</AdditionInfo>
        <Info> 24.10.2020</Info>
      </Box>
      <Tags>
        <Tag>Action</Tag>
        <Tag>Drama</Tag>
        <Tag>Adventure</Tag>
      </Tags>
      <Scores data={{ score: 7.6, votes: 643 }} />
    </Content>
    <Description>
      A young Chinese maiden disguises herself as a male warrior in order to
      save her father. Disguises herself as a male warrior in order to save her
      father. A young Chinese maiden disguises herself as a male warrior in
      order to save her father.
    </Description>
  </TileWrap>
);
