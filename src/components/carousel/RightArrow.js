import React from 'react';
import PropTypes from 'prop-types';

function RightArrow({ onNextSlide }) {
  return (
    <button
      className='forwardArrow'
      onClick={() => onNextSlide()}
      title='Next slide'>
      &gt;
    </button>
  );
}

RightArrow.propTypes = {
  onNextSlide: PropTypes.func.isRequired,
};

export default RightArrow;
