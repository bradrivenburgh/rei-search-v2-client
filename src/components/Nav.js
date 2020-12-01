import React from 'react';
import Search from './Search';
import './Nav.css';

function Nav({ setMenuOffset }) {
  const handleMenuOpen = () => {
    setMenuOffset('0px');
  }

  return(
    <nav className="nav">
      <img src="https://via.placeholder.com/35x35?text=LOGO" alt="Logo" />
      <Search />
      <button onClick={() => handleMenuOpen()}>☰</button>      
    </nav>
  );
}

export default Nav;