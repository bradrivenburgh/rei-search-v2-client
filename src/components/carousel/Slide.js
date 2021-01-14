import React, {useState} from 'react';
import house from '../../images/default-house.png';
import PropTypes from 'prop-types';

function Slide({photos, activeIndex}) {
  let [isValid, setIsValid] = useState(true);

  /**
   * Replaces images that aren't retrievable with a default photo
   * @param {string} url
   */
  const addSafeSrc = (url) => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return;
        }
        throw new Error("The image url was invalid");
      })
      .catch((e) => {
        setIsValid(false);
        console.error(e);
      });
    return isValid;
  };

  return (
    <div>
      {
        photos.map((url, index) => 
        <div className={
          index === activeIndex ? 'active-slide' : 'inactive-slide'}
          key={index}>
            <img 
            src={addSafeSrc(url) ? url : house}
            height="200px"
            width="100%"
            alt={`slide ${index + 1}`} 
            />
        </div>
        )
      }
    </div>
  );
} 

Slide.defaultProps = {
  photos: [],
  activeIndex: 1
}

Slide.propTypes = {
  photos: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired
}

export default Slide;