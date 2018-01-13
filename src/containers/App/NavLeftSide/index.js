import React, { Component } from "react";

import "./index.css";

class NavLeftSide extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="NavLeftSide">
        <div className="NavLeftSide-scroll">
          <div className="NavLeftSide-inner">
            <div className="NavLeftSide-menu">
              <ul>
                <li className="menu-title">Main</li>
              </ul>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavLeftSide;
