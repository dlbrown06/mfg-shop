import React from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

// Iterate over each error object and print them
// in an unordered list
const Errors = props => {
  const { errors } = props;
  return (
    <div>
      {errors.map((err, key) => (
        <Alert color="danger" key={key}>
          {err.body}
        </Alert>
      ))}
    </div>
  );
};

Errors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      time: PropTypes.date
    })
  )
};

export default Errors;
