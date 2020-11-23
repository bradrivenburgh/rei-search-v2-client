import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../Context';
import './SavedProps.css';

function SavedProps() {
    const { savedProperties } = useContext(Context);
    let history = useHistory();

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
                  <div className='saved-properties__flex-container'>
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
                        <button>Remove</button>
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
      <section className="saved-properties">
        <nav className="closing-nav">
          <button onClick={() => history.goBack()}>X</button>
        </nav>
        <header>
          <h1>Saved Properties</h1>
        </header>

        {renderProperties(savedProperties)}
      </section>
    );
  }

export default SavedProps;