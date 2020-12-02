import React from 'react';
import house from '../images/default-house.png';

function Image({photos, alt}) {
  /**
   * Replaces images that aren't retrievable with a default photo
   * @param {array} photos
   */
  const addSafeSrc = (photoUrls) => {
    const handleError = photoUrls.map((photoUrl) => {
      try {
        return photoUrl;
      } catch(e) {
        return house;
      }
    });
    return handleError;
  };

  return (
    <img 
      src={addSafeSrc(photos)[0]} 
      alt={alt}
    />
  );
}

Image.defaultProps = {
  photos: []
}

export default Image;