import React from 'react';

function LeftArrow({onPrevSlide}) {
  return (
    <button className="backArrow" onClick={() => onPrevSlide()}>&lt;</button>
  );
}

export default LeftArrow;