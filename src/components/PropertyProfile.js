import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './PropertyProfile.css';

function PropertyProfile() {
  // Get history object to allow navigating back tot he last page
  let history = useHistory();
  // Get location.state object to import property info passed by Link
  let {property = {}} = useLocation().state;
  const {
    address: { streetAddress, city, state, zipcode },
    price,
    photos,
    bedrooms,
    bathrooms,
    livingArea,
    yearBuilt,
    description,
  } = property;


  return (
    <section className='property-profile'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>

      <header>
        <h1>Property Profile</h1>
      </header>

      <div className='property-profile__carousel'>
        <img
          // src='https://via.placeholder.com/300x200?text=Image Carousel'
          src={photos[0]}
          alt='first'
        />
      </div>

      <div>
        <button>Save / Remove</button>
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

export default PropertyProfile;