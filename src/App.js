import React, { useState } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home, SingleFact } from "./pages";
import "./App.css";
import ThemeContext, { themes } from "./themes";
import store from "./store";

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const switchTheme = () =>
    setCurrentTheme(currentTheme === themes.dark ? themes.light : themes.dark);
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={currentTheme}>
        <Router>
          <Switch>
            <Route exact path="/home">
              {(routeProps) => (
                <Home {...routeProps} switchTheme={switchTheme} />
              )}
            </Route>
            <Route exact path="/single-fact/:id">
              {(routeProps) => (
                <SingleFact {...routeProps} switchTheme={switchTheme} />
              )}
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
