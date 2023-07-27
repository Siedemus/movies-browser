import poster from "../../Assets/Images/poster.png";
import {
  MainTileContainer,
  Image,
  MainTileTitle,
  MainTileYear,
  Tag,
  Tags,
  Content,
  MainTailBox,
} from "./styled";
import { MainTailScores } from "./MainTailScores/index";

export const MainTile = ({ title, subtitle, tags, rate }) => (
  <MainTileContainer>
    <Image src={poster} alt="" />
    <MainTailBox>
      <Content>
        <MainTileTitle>{title}</MainTileTitle>
        <MainTileYear>{subtitle}</MainTileYear>
        <Tags>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
      </Content>
      <MainTailScores data={rate} />
    </MainTailBox>
  </MainTileContainer>
);
