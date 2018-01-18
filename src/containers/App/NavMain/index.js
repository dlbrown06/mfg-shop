import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

import "./index.css";

class NavMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="NavMain">
        <div className="NavMain-left text-center">
          {/*<a href="/" className="logo">
            MFG Shop
          </a>*/}
          <Link to="/" className="logo">
            MFG Shop
          </Link>
        </div>
        <Navbar className="navbar-custom" color="faded" expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <i className="fa fa-book" /> Documentation
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink
                        href="https://github.com/dlbrown06/mfg-shop"
                        target="_blank"
                      >
                        <i className="fa fa-github" /> Github
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        href="https://mfgshop.docs.apiary.io"
                        target="_blank"
                      >
                        <i className="fa fa-code" /> Apiary
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMain;
