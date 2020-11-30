import React, { useState } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Slide from './Slide';
import './Carousel.css';

function Carousel({photos}) {
  let [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
    let index = activeIndex;
    let length = photos.length;
    index === length - 1
      ? index = 0
      : index++
      setActiveIndex(index)
  };

  const handlePrevSlide = () => {
    let index = activeIndex;
    let length = photos.length;
    index < 1
      ? index+= length - 1
      : index--;
    setActiveIndex(index)
  };

  return (
    <div className='slider'>
    <div className='slider-items'>
      <LeftArrow
        onPrevSlide={handlePrevSlide}
      />
    <div className='slider-text'>
      <Slide
        photos={photos}
        activeIndex={activeIndex}
      />
    </div>
      <RightArrow
        onNextSlide={handleNextSlide}
      />
    </div>
  </div>
  );
}

export default Carousel;