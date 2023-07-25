import { Container } from "./components/Container";
import { Scores } from "./components/Scores";
import {
  Image,
  Content,
  Tile,
  Title,
  Year,
  Tags,
  Tag,
  Description,
} from "./components/Tile";
import poster from "./images/poster.png";

function App() {
  return (
    <Container>
      <Tile>
        <Image src={poster} alt="" />
        <Content>
          <Title>Mulan</Title>
          <Year>2020</Year>
          <Tags>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
            <Tag>Drama</Tag>
          </Tags>
          <Scores data={{ score: 7.6, votes: 643 }} />

          <Description>
            A young Chinese maiden disguises herself as a male warrior in order
            to save her father. Disguises herself as a male warrior in order to
            save her father. A young Chinese maiden disguises herself as a male
            warrior in order to save her father.
          </Description>
        </Content>
      </Tile>
    </Container>
  );
}
export default App;
