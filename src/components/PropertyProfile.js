import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import house from "../images/default-house.png";
import { ReactComponent as HeartIcon } from "../images/heart.svg";
import Carousel from "./carousel/Carousel";
import "./PropertyProfile.css";

function PropertyProfile({
  savedProperties,
  currentProperty,
  onAddRemoveProperty,
  formatNumber,
}) {
  // Get history object to allow navigating back to the last page
  let history = useHistory();

  const { inSavedProperties, propertyData } = currentProperty;

  const {
    address: { streetAddress, city, state, zipcode },
    price,
    photos,
    bedrooms,
    bathrooms,
    livingArea,
    yearBuilt,
    description,
  } = propertyData.property;

  return (
    <section className='property-profile'>
      <header>
        <nav className='closing-nav'>
          <button onClick={() => history.goBack()}>X</button>
        </nav>
        <h1>Property Profile</h1>
      </header>

      <div className='carousel-container'>
        <Carousel photos={photos.length ? photos : [house]} />
        <button
          className={
            inSavedProperties
              ? "addRemove-button remove-button"
              : "addRemove-button add-button"
          }
          aria-pressed={inSavedProperties}
          title="favorite"
          value='add-remove'
          onClick={() =>
            onAddRemoveProperty(
              inSavedProperties,
              propertyData,
              savedProperties
            )
          }>
          <HeartIcon />
        </button>
      </div>

      <div className='property-profile__info'>
        <p className='property-profile__price'>${formatNumber(price)}</p>
        <p className='property-profile__address'>
          {streetAddress}, <br />
          {city}, {state} {zipcode}
        </p>
      </div>

      <div className='property-profile__basic-stats-container'>
        <h2>Basic Facts</h2>

        <ul className='property-profile__basic-stats'>
          <li>
            <strong>bed</strong> <br /> {bedrooms}
          </li>
          <li>
            <strong>bath</strong> <br /> {bathrooms}
          </li>
          <li>
            <strong>sqft</strong> <br /> {livingArea}
          </li>
          <li>
            <strong>built</strong> <br /> {yearBuilt}
          </li>
        </ul>
      </div>

      <div className='property-profile__info'>
        <div>
          <div className='property-profile__description'>
            <h2>Description</h2>
            <p> {description} </p>
          </div>
        </div>
      </div>
    </section>
  );
}

PropertyProfile.defaultProps = {
  currentProperty: {
    inSavedProperties: true,
    propertyData: {
      id: 1,
      property: {
        address: {
          streetAddress: "Placeholder St.",
          city: "Somewhere",
          state: "PA",
          zipcode: "00000",
          neighborhood: null,
          community: null,
          subdivision: null,
        },
        bedrooms: "2",
        bathrooms: "2",
        price: "200000",
        yearBuilt: 1980,
        longitude: -75.10820770263672,
        latitude: 39.98884201049805,
        description: "Placeholder description.",
        livingArea: 1000,
        currency: "USD",
        photos: [],
      },
    },
  },
  savedProperties: [{}],
  onAddRemoveProperty: () => {},
  formatNumber: () => {},
};

PropertyProfile.propTypes = {
  currentProperty: PropTypes.shape({
    inSavedProperties: PropTypes.bool.isRequired,
    propertyData: PropTypes.object.isRequired,
  }),
  savedProperties: PropTypes.array.isRequired,
  onAddRemoveProperty: PropTypes.func.isRequired,
  formatNumber: PropTypes.func.isRequired,
};

export default PropertyProfile;
