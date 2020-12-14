import React from 'react';
import PropTypes from 'prop-types';

export default function ValidationError(props) {
  if(props.message) {
    return (
      <div className="error">{props.message}</div>
    );
  }

  return <></>
}

ValidationError.defaultProps = {
  message: ""
}

ValidationError.propTypes = {
  message: PropTypes.string.isRequired
}