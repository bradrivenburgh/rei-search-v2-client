import React from 'react';
import './Nav.css';

function Nav() {
  const handleMenuOpen = () => {
    document.getElementById("menu").style.right = "0px";
  }

  return(
    <nav className="nav">
      <img src="https://via.placeholder.com/35x35?text=LOGO" alt="Logo" />
      {/** <Search /> */}
      <input placeholder="Philadelphia, PA" />
      <button onClick={handleMenuOpen}>☰</button>      

    </nav>
  );
}

export default Nav;