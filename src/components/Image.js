import React from 'react';

function Image({photos}) {
  /**
   * Replaces images from Google Maps with default to
   * avoid 403 http errors
   * @param {array} photos
   */
  const addSrc = (photos) => {
    const checkedPhotos = photos.map((photo) => {
      if (photo.includes("https://maps.googleapis.com")) {
        return "https://via.placeholder.com/250x125?text=No_Image";
      }
      return photo;
    });
    return checkedPhotos;
  };

  return (
    <img 
      src={addSrc(photos)[0]} 
      alt='property'
    />
  );
}

Image.defaultProps = {
  photos: []
}

export default Image;