import React from 'react';
import './Nav.css';

function Nav() {
  return(
    <nav className="nav">
      <p>[Logo]</p>
      {/** <Search /> */}
      <input placeholder="Philadelphia, PA" />       
      
      {/**<Menu /> */}
      <button>☰</button>
    </nav>
  );
}

export default Nav;