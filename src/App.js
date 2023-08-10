import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom";
import MoviesPage from "./Features/MoviesPage";
import { PeoplePage } from "./Features/PeoplePage";
import { Navigation } from "./Features/Navigation/index";
import MovieDetailsPage from "./Features/MovieDetailsPage";

function App() {
  return (
    <HashRouter>
      <Navigation toMovies={"/movies"} toPeople={"/people"} />
      <Switch>
        <Route path="/movies/:id">
          <MovieDetailsPage />
        </Route>
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
