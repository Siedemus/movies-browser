import { StyledNavLink } from "../../Assets/Styles/styled";
import {
  MainTileContainer,
  Image,
  MainTileTitle,
  MainTileYear,
  Tag,
  Tags,
  Content,
  MainTileBox,
} from "./styled";
import { MainTileScores } from "./MainTileScores/index";
import { useSelector } from "react-redux";
import { selectGenres } from "./genresSlice";
import { MovieImage } from "./MovieImage";

export const MainTile = ({ id, title, subtitle, tags, rate, poster }) => {
  const genres = useSelector(selectGenres);

  return (
    <StyledNavLink to={`/movies/${id}`}>
      <MainTileContainer>
        <MovieImage poster={poster} />
        <MainTileBox>
          <Content>
            <MainTileTitle>{title}</MainTileTitle>
            <MainTileYear>{subtitle}</MainTileYear>
            <Tags>
              {genres && tags ? (
                tags
                  .slice(0, 3)
                  .map((tag) => (
                    <Tag key={tag}>
                      {genres.find((genre) => genre.id === tag)?.name}
                    </Tag>
                  ))
              ) : (
                <Tag>No Data</Tag>
              )}
            </Tags>
          </Content>
          {rate ? <MainTileScores data={rate} /> : null}
        </MainTileBox>
      </MainTileContainer>
    </StyledNavLink>
  );
};
