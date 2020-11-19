import React, { useContext } from 'react';
import { Context } from '../Context';
import './SavedProps.css';

function SavedProps() {
    const { savedProperties } = useContext(Context);
  
    const addDefaultSrc = (e) => {
      e.target.onError=null;
      e.target.src = "https://via.placeholder.com/250x125?text=No Image"
    }
  
    const renderProperties = (data) => {
      return (
        
        <ul>
          {data.map((property, index) => {
            const { 
              address: { streetAddress, city, state, zipcode }, 
              price,
              photos
            } = property;
            
            return (
              <li key={index}>
              <ul>
                <li>
                  <a href="property-profile.html">
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
                  <button>Remove</button>
                </li>
                <hr />
              </ul>
            </li>
            );
          })}
        </ul>    
  
      );
  
    }
  
    return (
      <section className="saved-properties">
        <h1>Saved Properties</h1>
        {renderProperties(savedProperties)}
      </section>
    );
  }

export default SavedProps;