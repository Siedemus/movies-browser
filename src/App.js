import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom";
import MoviesPage from "./Features/MoviesPage";
import PeoplePage from "./Features/PeoplePage";
import { Navigation } from "./Features/Navigation/index";
import MovieDetailsPage from "./Features/MovieDetailsPage";
import PeopleDetailPage from "./Features/PeopleDetailPage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/movies/:id">
          <MovieDetailsPage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/people/:id">
          <PeopleDetailPage />
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
