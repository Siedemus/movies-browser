import {
    CharacterName,
    GetDetailsPeopleLink,
    PersonName,
    Wrapper
} from "./styled"


export const PeopleListTitle = ({ name, poster, id, character }) => {
    return (
        <GetDetailsPeopleLink to={`/people/${id}`} key={id}>
            <Wrapper>
                <PersonImage poster={poster} />
                <PersonName>{name}</PersonName>
                <CharacterName>{character}</CharacterName>
            </Wrapper>
        </GetDetailsPeopleLink >
    );
};