import React, {useState, useContext} from 'react';
import { Context } from '../Context';
import './PropertiesTab.css';

function PropertiesTab() {
  const { properties } = useContext(Context);

  const addDefaultSrc = (e) => {
    e.target.onError=null;
    e.target.src = "https://via.placeholder.com/250x125?text=No Image"
  }

  const renderProperties = (data) => {
    return (
      <>
      <h3>Properties</h3>
      <ul>
        {data.map((property, index) => {
          const { 
            address: { streetAddress, city, state, zipcode }, 
            price,
            photos
          } = property;
          
          return (
            <li key={index} className="property">
            <ul>
              <li>
                <a href="property-profile-dash.html">
                  <img 
                    src={photos[0]} 
                    alt="property" 
                    onError={(e) => addDefaultSrc(e)} />
                </a>
              </li>
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
                <a href="#"><button>Save</button></a>
              </li>
              <hr />
            </ul>
          </li>
          );
        })}
      </ul>    
    </>

    );

  }

  return (
    renderProperties(properties)
  );
}

export default PropertiesTab;