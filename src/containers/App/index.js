import React from "react";

import AppContent from "../AppContent";
import NavMain from "../NavMain";
import NavLeftSide from "../NavLeftSide";

import "./index.css";

const App = () => (
  <div className="App">
    <NavMain />
    <NavLeftSide />
    <AppContent />
  </div>
);

export default App;
