import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import axios from "axios";
import SavedPage from "./components/SavedPage";
import SearchPage from "./components/SearchPage";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=quilting")
      .then(console.log)
      .catch(console.log);
  });
  return (
    <Router>
      <Navbar />
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
