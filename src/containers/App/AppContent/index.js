import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../../Home/index";
import NotFound from "../../NotFound/index";

import "./index.css";

class AppContent extends Component {
  render() {
    return (
      <Router>
        <div className="AppContent">
          <div className="AppContent-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <footer>Open Source Manufacturing Shop Floor System</footer>
        </div>
      </Router>
    );
  }
}

export default AppContent;
