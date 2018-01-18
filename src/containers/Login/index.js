import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  FormGroup,
  InputGroup,
  Card,
  CardBody,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import loginRequest from "./actions";

import Messages from "../../components/Messages";
import Errors from "../../components/Errors";

import "./index.css";

class Login extends Component {
  // Remember, Redux Form passes the form values to our handler
  // In this case it will be an object with `email` and `password`
  submit = values => {
    this.props.loginRequest(values);
  }

  render() {
    const {
      handleSubmit, // remember, Redux Form injects this into our props
      login: { requesting, successful, messages, errors }
    } = this.props;

    return (
      <Container fluid className="Login h-100">
        <Row className="h-100 justify-content-center align-items-center">
          <Col lg={6} md={8} sm={10}>
            <Card className="card-outline-primary mb-3 text-center">
              <CardBody>
                <h1>MFG Shop</h1>
                <form onSubmit={handleSubmit(this.submit)}>
                  <FormGroup row>
                    <Col xs={12}>
                      <InputGroup>
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="fa fa-fw fa-user" />
                          </div>
                        </div>
                        <Field
                          name="email"
                          type="text"
                          id="email"
                          className="email form-control"
                          component="input"
                        />
                      </InputGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col xs={12}>
                      <InputGroup>
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="fa fa-fw fa-key" />
                          </div>
                        </div>
                        <Field
                          name="password"
                          type="password"
                          id="password"
                          className="password form-control"
                          component="input"
                        />
                      </InputGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col xs={{ size: 8, offset: 2 }} className="text-right">
                      <Button color="primary" block>
                        Login
                      </Button>
                    </Col>
                  </FormGroup>
                </form>

                <div className="auth-messages">
                  {/* As in the signup, we're just using the message and error helpers */}
                  {!requesting &&
                    !!errors.length && (
                      <Errors
                        message="Failure to login due to:"
                        errors={errors}
                      />
                    )}
                  {!requesting &&
                    !!messages.length && <Messages messages={messages} />}
                  {requesting && <div>Logging in...</div>}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func,
  loginRequest: PropTypes.func,
  login: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    messages: PropTypes.array,
    errors: PropTypes.array
  })
};

/*// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = ({ user }) => ({
  user: user
});

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(Login);
*/

// Grab only the piece of state we need
const mapStateToProps = state => ({
  login: state.login
});

// make Redux state piece of `login` and our action `loginRequest`
// available in this.props within our component
const connected = connect(mapStateToProps, { loginRequest })(Login);

// in our Redux's state, this form will be available in 'form.login'
const formed = reduxForm({
  form: "login"
})(connected);

// Export our well formed login component
export default formed;
