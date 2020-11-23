import React from 'react';
import { useHistory } from 'react-router-dom';
import './PropertyProfile.css';

function PropertyProfile() {
  let history = useHistory();  
  
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
          src='https://via.placeholder.com/300x200?text=Image Carousel'
          alt='[images of property]'
        />
      </div>

      <section class='property-profile'>
        <button>Save / Remove</button>
        <p class='property-profile__price'>$6,250,000</p>
        <p class='property-profile__address'>
          43 8th Ave, <br />
          Brooklyn, NY 11217
        </p>

        <div class='property-profile__info'>
          <h2>Basic Facts</h2>

          <ul class='property-profile__basic-stats'>
            <li>
              <strong>bed</strong> <br /> 5
            </li>
            <li>
              <strong>bath</strong> <br /> 3
            </li>
            <li>
              <strong>sqft</strong> <br /> 7000
            </li>
            <li>
              <strong>built</strong> <br /> 1984
            </li>
          </ul>

          <div class='property-profile__description'>
            <h2>Description</h2>
            <p>
              Lovely Row home on a quiet block with Off-street parking! This
              home boasts exposed brick walls, tons of character, hardwood
              flooring, pocket doors, and a great location. Within close
              proximity to tons of restaurants, bars, parks, shopping, and
              transportation, you really can't go wrong. Call for a showing
              today!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default PropertyProfile;