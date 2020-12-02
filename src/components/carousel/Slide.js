import React from 'react';
import house from '../../images/default-house.png';

function Slide({photos, activeIndex}) {
  /**
   * Replaces images that aren't retrievable with a default photo
   * @param {string} photo
   */
  const addSafeSrc = (photoUrl) => {
      try {
        return photoUrl;
      } catch(e) {
        return house;
      }
  };

  return (
    <div>
      {
        photos.map((photoUrl, index) => 
        <div className={
          index === activeIndex ? 'active-slide' : 'inactive-slide'}
          key={index}>
            <img src={addSafeSrc(photoUrl)} alt={`slide ${index}`} />
        </div>
        )
      }
    </div>
  );
} 

export default Slide;