import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import constants from "../config/constants";

const { MFG_SHOP_API } = constants.SERVICES;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Shop Floor API: '{MFG_SHOP_API}'</p>
      </div>
    );
  }
}

export default App;
