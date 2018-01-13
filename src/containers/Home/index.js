import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { loginRequest } from "../../actions/userActions";

import "./index.css";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(loginRequest("testUser", "testPassword"));
  }

  render() {
    console.log(this.props.user, "User");

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

// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = ({ user }) => ({
  user: user
});

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(Home);
