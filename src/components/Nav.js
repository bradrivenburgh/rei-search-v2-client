import React from 'react';
import Menu from './Menu';
import './Nav.css';

function Nav() {
  return(
    <nav className="nav">
      <p>[Logo]</p>
      
      {/** <Search /> */}
      <input placeholder="Philadelphia, PA" />       
      
      <Menu />
    </nav>
  );
}

export default Nav;