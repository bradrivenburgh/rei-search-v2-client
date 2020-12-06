import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
          } = property;

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
                  <li>
                    <Link to='/property-profile'>
                      <Image photos={photos} />
                    </Link>
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
                    <li>
                      <button
                        className='addRemove-button remove-button'
                        aria-pressed='true'
                        onClick={() =>
                          onAddRemoveProperty(true, property, savedProperties)
                        }>
                        &#10084;
                      </button>
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
  savedProperties: {},
  setCurrentProperty: () => {},
  onAddRemoveProperty: () => {},
}

export default SavedProps;