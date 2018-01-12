// src/routes.js
import React from "react";
// import { Router, Route, IndexRoute } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./containers/App";
import Home from "./containers/Home";

import NotFound from "./containers/NotFound";

const Routes = props => (
  <Router {...props}>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
