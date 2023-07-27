import poster from "../../Assets/Images/poster.png";
import {
  MainTileContainer,
  Image,
  MainTileWrap,
  MainTileTitle,
  MainTileYear,
  Tag,
  Tags,
  Content,
} from "./styled";
import { MainTailScores } from "./MainTailScores/index";

export const MainTile = ({ title, year, tag }) => (
  <MainTileContainer>
    <MainTileWrap>
      <Image src={poster} alt="" />
      <div>
        <Content>
          <MainTileTitle>{title}</MainTileTitle>
          <MainTileYear>{year}</MainTileYear>
          <Tags>
            <Tag>{tag}</Tag>
            <Tag>{tag}</Tag>
            <Tag>{tag}</Tag>
          </Tags>
        </Content>
        <MainTailScores calssName="last" data={{ score: 7.6, votes: 643 }} />
      </div>
    </MainTileWrap>
  </MainTileContainer>
);
