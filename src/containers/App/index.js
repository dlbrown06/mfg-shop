import React from "react";

import AppContent from "./AppContent";
import NavMain from "./NavMain";
import NavLeftSide from "./NavLeftSide";
import Login from "../Login";

import auth from "../../auth";

import "./index.css";

const App = () => (
  <div className="App">
    {auth.loggedIn() ? (
      <div>
        <NavMain />
        <NavLeftSide />
        <AppContent />
      </div>
    ) : (
      <Login />
    )}
  </div>
);

export default App;
