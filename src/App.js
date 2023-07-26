import { Container } from "./components/Container";
import { Tile } from "./components/Tile/index";

function App() {
  return (
    <Container>
      <Tile
        title="Mulan"
        year="2020"
        infoProduction="China USA"
        infoDate="24.10.2020"
        tag="Action"
        filmDescription="A young Chinese maiden disguises herself as a male warrior in order to
      save her father. Disguises herself as a male warrior in order to save her
      father. A young Chinese maiden disguises herself as a male warrior in
      order to save her father."
      />
    </Container>
  );
}
export default App;
