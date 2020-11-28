import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import './PropertiesTab.css';

function PropertiesTab() {
  const {
    searchResults: { properties = [] },
    currentProperty,
    setCurrentProperty,
    savedProperties, 
    setSavedProperties
  } = useContext(Context);  


  const addDefaultSrc = (e) => {
    e.target.onError=null;
    e.target.src = "https://via.placeholder.com/250x125?text=No Image"
  }

  const renderProperties = (data) => {
    return (
      <ul className='properties'>
        {data.map((property, index) => {
          const {
            address: { streetAddress, city, state, zipcode },
            price,
            photos,
          } = property;

          const inSavedProps = (savedProps = savedProperties, street = streetAddress) => {
            if (savedProperties.length) {
              const filteredProps = savedProperties.filter(savedProp => {
                return savedProp["address"]["streetAddress"] !== street
              })
              if (filteredProps.length !== savedProps.length) {
                return filteredProps;
              }
            } 
            
            return false;
          }
        

          return (
          <li key={index} onClick={() => setCurrentProperty({
            propertyData: property, 
            inSavedProperties: inSavedProps()})}>
              <ul>
                <div className="properties__flex-container">
                  <li>
                    <Link to='/property-profile'>
                      <img
                        src={photos[0]}
                        alt='property'
                        onError={(e) => addDefaultSrc(e)}
                      />
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
                    <button>{inSavedProps() ? "Remove": "Save"}</button>
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

  }

  return (
    <>
      <h3>Properties</h3>
      {renderProperties(properties)}
    </>
  );
}

export default PropertiesTab;