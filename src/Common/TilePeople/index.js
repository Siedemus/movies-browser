import {
  CharacterName,
  PersonName,
  Wrapper,
  GetDetailsPeopleLink,
  PersonWrap,
} from "./styled";
import { PersonImage } from "./Image";

export const PeopleListTile = ({ name, poster, id, character }) => {
  return (
    <GetDetailsPeopleLink to={`/people/${id}`} key={id}>
      <Wrapper>
        <PersonImage poster={poster} />
        <PersonWrap>
          <PersonName>{name}</PersonName>
          <CharacterName>{character}</CharacterName>
        </PersonWrap>
      </Wrapper>
    </GetDetailsPeopleLink>
  );
};
