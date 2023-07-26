import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom";
import MoviesPage from "./Features/MoviesPage";
import PeoplePage from "./Features/PeoplePage";
import { Navigation } from "./Common/Navigation/index";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/people">
          <PeoplePage />
        </Route>
        <Redirect to="/movies" />
      </Switch>
    </HashRouter>
  );
}
export default App;
