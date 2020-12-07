import React, {useState} from 'react';
import house from '../../images/default-house.png';

function Slide({photos, activeIndex}) {
  let [isValid, setIsValid] = useState(false);

  /**
   * Replaces images that aren't retrievable with a default photo
   * @param {string} url
   */
  const addSafeSrc = (url) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          setIsValid(true);
          return;
        }
        throw new Error("The image url was invalid");
      })
      .catch((e) => {
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
            alt={`slide ${index}`} 
            />
        </div>
        )
      }
    </div>
  );
} 

export default Slide;