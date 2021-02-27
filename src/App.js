import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home, SingleFact } from "./pages";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/home">
            {(routeProps) => <Home {...routeProps} />}
          </Route>
          <Route path="/single-fact/:id">
            {(routeProps) => <SingleFact {...routeProps} />}
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
