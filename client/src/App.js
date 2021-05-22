import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import SavedPage from "./components/SavedPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route path="/saved">
          <SavedPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
