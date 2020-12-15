import React, { useState } from "react";
import house from "../images/default-house.png";

function Image({ photo, alt }) {
  // try fetch call to see if there is a successful response and replace
  // src with the value of data-src
  // https://stackoverflow.com/questions/47263773/add-image-data-to-html-file

  let [isValid, setIsValid] = useState(true);

  /**
   * Replaces images that aren't retrievable with a default photo
   * @param {string} photos
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
    <img
      className='property-image'
      height={125}
      width={200}
      src={addSafeSrc(photo) ? photo : house}
      alt={alt}
    />
  );
}

Image.defaultProps = {
  photos: [],
  alt: "",
};

export default Image;
