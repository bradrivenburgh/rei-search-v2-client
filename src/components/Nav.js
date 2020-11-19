import React from 'react';
import Search from './Search';
import './Nav.css';

function Nav() {
  const handleMenuOpen = () => {
    document.getElementById("menu").style.right = "0px";
  }

  const suggestions = [
    "Philadelphia, PA",
    "Langhorne, PA",
    "Moorestown, NJ",
    "Mt. Laurel, NJ",
    "Cinnaminson, NJ"
  ];

  return(
    <nav className="nav">
      <img src="https://via.placeholder.com/35x35?text=LOGO" alt="Logo" />
      <Search />
      <input placeholder="Philadelphia, PA" />
      <button onClick={handleMenuOpen}>☰</button>      

    </nav>
  );
}

export default Nav;