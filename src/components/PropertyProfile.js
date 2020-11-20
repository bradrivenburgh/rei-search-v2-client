import React from 'react';
import { useHistory } from 'react-router-dom';
import './SavedProps.css';

function PropertyProfile() {
  let history = useHistory();  
  
  return (
    <section className="saved-properties">
      <nav className="closing-nav">
        <button onClick={() => history.goBack()}>X</button>
      </nav>        
      <header>
        <h1>PropertyProfile</h1>
      </header>
      <section>
        <p>To Come</p>
      </section>
    </section>
  );
}

export default PropertyProfile;