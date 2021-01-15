import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import {ReactComponent as HeartIcon} from '../images/heart.svg';
import Image from './Image';
import './SavedProps.css';

function SavedProps({
  savedProperties,
  setCurrentProperty,
  onAddRemoveProperty,
}) {

  let history = useHistory();

  const renderProperties = (data) => {
    return (
      <ul>
        {data.map((property, index) => {
          const {
            address: { streetAddress, city, state, zipcode },
            price,
            photos,
          } = property.property;

          return (
            <li
              key={index}
              onClick={() =>
                setCurrentProperty({
                  propertyData: property,
                  inSavedProperties: true,
                })
              }>
              <ul>
                <div className='saved-properties__flex-container'>
                  <li className='saved-properties__img-container'>
                    <Link to='/property-profile'>
                      <Image photo={photos[0]} />
                    </Link>
                    <button
                        className='addRemove-button remove-button'
                        value='add-remove'
                        aria-pressed='true'
                        onClick={() =>
                          onAddRemoveProperty(true, property, savedProperties)
                        }>
                        <HeartIcon />
                      </button>
                  </li>
                  <div>
                    <li>
                      <p>${price}</p>
                    </li>
                    <li>
                      <p>
                        {streetAddress}, <br />
                        {city}, {state} {zipcode}
                      </p>
                    </li>
                  </div>
                </div>
                <hr />
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section className='saved-properties'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>
      <header>
        <h1>Saved Properties</h1>
      </header>

      {renderProperties(savedProperties)}
    </section>
  );
}

SavedProps.defaultProps = {
  savedProperties: [{
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
  }}],
  setCurrentProperty: () => {},
  onAddRemoveProperty: () => {},
}

SavedProps.propTypes = {
  savedProperties: PropTypes.array.isRequired,
  setCurrentProperty: PropTypes.func.isRequired,
  onAddRemoveProperty: PropTypes.func.isRequired,
}

export default SavedProps;