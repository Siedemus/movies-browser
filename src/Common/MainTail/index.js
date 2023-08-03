import { StyledNavLink } from "../../Assets/Styles/styled";
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
import { images } from "../../apiURLs";
import { useSelector } from "react-redux";
import { selectGenres } from "./genresSlice";

export const MainTile = ({ id, title, subtitle, tags, rate, poster }) => {
  const genres = useSelector(selectGenres);

  return (
    <MainTileContainer>
      <Image src={`${images}${poster}`} alt={`${title} poster`} />
      <MainTailBox>
        <Content>
          <MainTileTitle>
            <StyledNavLink to={`/movies/${id}`}>{title}</StyledNavLink>
          </MainTileTitle>
          <MainTileYear>{subtitle}</MainTileYear>
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
        </Content>
        {rate ? <MainTailScores data={rate} /> : null}
      </MainTailBox>
    </MainTileContainer>
  );
};
