import React from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from './carousel/Carousel';
import './PropertyProfile.css';

function PropertyProfile({currentProperty, onSaveRemoveProperty}) {
  // Get history object to allow navigating back to the last page
  let history = useHistory();

  const {
    address: { streetAddress, city, state, zipcode },
    price,
    photos,
    bedrooms,
    bathrooms,
    livingArea,
    yearBuilt,
    description,
  } = currentProperty.propertyData;

  return (
    <section className='property-profile'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>

      <header>
        <h1>Property Profile</h1>
      </header>

      <div className="carousel-container">
        <Carousel photos={photos} />
        <button
          className="addRemove-button"
          onClick={() =>
            onSaveRemoveProperty(currentProperty.inSavedProperties)
          }>
          {currentProperty.inSavedProperties 
            ? <span className="remove-button">&#10084;</span> 
            : <span className="add-button">&#10084;</span>}
        </button>
      </div>

      <div>
        <p className='property-profile__price'>${price}</p>
        <p className='property-profile__address'>
          {streetAddress}, <br />
          {city}, {state} {zipcode}
        </p>

        <div className='property-profile__info'>
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
  currentProperty: {},
};

export default PropertyProfile;