import React from 'react';
import house from '../images/default-house.png';

function Image({photos, alt}) {
  /**
   * Replaces images that aren't retrievable with a default photo
   * @param {array} photos
   */
  const addSafeSrc = (photoUrls) => {
    const handleError = photoUrls.map((photoUrl) => {
      // try fetch call to see if there is a successful response and replace
      // src with the value of data-src
      // https://stackoverflow.com/questions/47263773/add-image-data-to-html-file
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
      className="property-image"
      src={addSafeSrc(photos)[0]} 
      alt={alt}
    />
  );
}

Image.defaultProps = {
  photos: [],
  alt: ''
}

export default Image;