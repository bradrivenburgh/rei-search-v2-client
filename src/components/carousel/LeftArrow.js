import React from 'react';
import PropTypes from 'prop-types';

function LeftArrow({ onPrevSlide }) {
  return (
    <button
      className='backArrow'
      onClick={() => onPrevSlide()}
      title='Previous slide'>
      &lt;
    </button>
  );
}

LeftArrow.propTypes = {
  onPrevSlide: PropTypes.func.isRequired,
};

export default LeftArrow;
