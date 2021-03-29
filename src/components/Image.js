import React, { useState } from "react";
import PropTypes from "prop-types";
import house from "../images/default-house.png";

function Image({ photo, alt }) {
  let [isValid, setIsValid] = useState(true);

  /**
   * Replaces images that aren't retrievable with a default photo
   * @param {string} photo
   * @param {string} alt
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
  photo: "",
  alt: "",
};

Image.propTypes = {
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
