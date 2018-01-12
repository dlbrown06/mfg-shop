import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <Container fluid className="Home">
        <Row>
          <Col xs={12}>
            <div className="page-title-box">
              <div className="page-title">Welcome!</div>
              <ol className="breadcrumb float-right">
                <li className="breadcrumb-item active">Home</li>
              </ol>
              <div className="clearfix" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>Here is where the home content will go</Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
