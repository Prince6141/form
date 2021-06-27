import React from "react";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
import NavigationBar from "./Layout/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/edit">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
