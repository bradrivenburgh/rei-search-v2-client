import React from 'react';
import './Nav.css';

function Nav() {
  return(
    <nav className="nav">
      <p>[Logo]</p>
      <input placeholder="Philadelphia, PA" /> {/** <Search /> */}      
      <button>☰</button> {/**<Menu /> */}
    </nav>
  );
}

export default Nav;