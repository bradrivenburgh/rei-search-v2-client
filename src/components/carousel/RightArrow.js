import React from 'react';

function RightArrow({onNextSlide}) {
  return (
    <button className="forwardArrow" onClick={() => onNextSlide()}>&gt;</button>
  );
}

export default RightArrow;