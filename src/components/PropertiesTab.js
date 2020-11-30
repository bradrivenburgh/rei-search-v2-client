import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import Image from './Image';
import './PropertiesTab.css';

function PropertiesTab({onSaveRemoveProperty}) {
  const {
    searchResults: { properties = [] },
    savedProperties,
    setCurrentProperty,
  } = useContext(Context);


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
                        className="addRemove-button"
                        onClick={() =>
                          onSaveRemoveProperty(inSavedProps(), property)
                        }>
                        {inSavedProps() 
                          ? <span className="remove-button">&#10084;</span> 
                          : <span className="add-button">&#10084;</span>}
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