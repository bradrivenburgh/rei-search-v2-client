import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    <section className='carousel'>
      <Slide photos={photos} activeIndex={activeIndex} />
      <div className="carousel__button-container">
        <LeftArrow onPrevSlide={handlePrevSlide} />
        <RightArrow onNextSlide={handleNextSlide} />
      </div>
    </section>
  );
}

Carousel.defaultProps = {
  photos: []
}

Carousel.propTypes = {
  photos: PropTypes.array.isRequired
  
}

export default Carousel;