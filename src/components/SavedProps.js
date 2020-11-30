import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../Context';
import Image from './Image';
import './SavedProps.css';

function SavedProps({ onSaveRemoveProperty }) {
    const { savedProperties } = useContext(Context);
    let history = useHistory();

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
                    <Link to={{pathname: '/property-profile', state: {property}}}>
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
                        <button onClick={() => onSaveRemoveProperty(true, property)}>Remove</button>
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