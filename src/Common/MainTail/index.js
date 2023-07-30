import { Link } from "react-router-dom";
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

  genres ? console.log(genres) : console.log("mam");

  return (
    <MainTileContainer>
      <Image src={`${images}${poster}`} alt={`${title} poster`} />
      <MainTailBox>
        <Content>
          <MainTileTitle>
            <Link to={`/movies/${id}`}>{title}</Link>
          </MainTileTitle>
          <MainTileYear>{subtitle}</MainTileYear>
          <Tags>
            {genres ? (
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
        <MainTailScores data={rate} />
      </MainTailBox>
    </MainTileContainer>
  );
};
