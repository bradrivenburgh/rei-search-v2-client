import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BoundaryError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  /**
   * Lifecycle method that catches thrown errors from descendants.
   * Return value sets instance state.
   */
  static getDerivedStateFromError(thrownError) {
    return { hasError: true, thrownError };
  }
  
  render() {
    if (this.state.hasError) {      
      return (
      <div className="error-message">
        <h1>{this.state.thrownError.name}</h1>
        <h2>An error has occurred.  Please try again later.</h2>
        <h2>{this.state.thrownError.message}</h2>
      </div>
        );
    }
    return this.props.children;
  }  
}

BoundaryError.propTypes = {
  thrownError: PropTypes.object
}