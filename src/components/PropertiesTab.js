import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import './PropertiesTab.css';

function PropertiesTab({onSaveRemoveProperty}) {
  const {
    searchResults: { properties = [] },
    savedProperties,
    setCurrentProperty,
  } = useContext(Context);

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

  const renderProperties = (data) => {
    return (
      <ul className='properties'>
        {data.map((property, index) => {
          const {
            address: { streetAddress, city, state, zipcode },
            price,
            photos,
          } = property;

          const inSavedProps = (
            savedProps = savedProperties,
            street = streetAddress
          ) => {
            if (savedProps.length) {
              const containsProp = savedProps.some((savedProp) => {
                return savedProp.address.streetAddress === street;
              });
              return containsProp;
            }
            return false;
          };

          return (
            <li
              key={index}
              onClick={() =>
                setCurrentProperty({
                  propertyData: property,
                  inSavedProperties: inSavedProps(),
                })
              }>
              <ul>
                <div className='properties__flex-container'>
                  <li>
                    <Link to='/property-profile'>
                      <img src={addSrc(photos)[0]} alt='property' />
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
                        onClick={() =>
                          onSaveRemoveProperty(inSavedProps(), property)
                        }>
                        {inSavedProps() ? "Remove" : "Save"}
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
    <>
      <h3>Properties</h3>
      {renderProperties(properties)}
    </>
  );
}

export default PropertiesTab;