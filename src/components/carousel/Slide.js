import React from 'react';

function Slide({photos, activeIndex}) {
  /**
   * Replaces images from Google Maps with default to
   * avoid 403 http errors
   * @param {string} photo
   */
  const addSrc = (photoUrl = "") => {
    if (photoUrl.includes("https://maps.googleapis.com")) {
      return "https://via.placeholder.com/250x125?text=No_Image";
    }
    return photoUrl;
  };


  return (
    <section>
      {
        photos.map((photoUrl, index) => 
        <div className={
          index === activeIndex ? 'active-slide' : 'inactive-slide'}
          key={index}>
            <img src={addSrc(photoUrl)} alt={`slide ${index}`} />
        </div>
        )
      }
    </section>
  );
} 

export default Slide;