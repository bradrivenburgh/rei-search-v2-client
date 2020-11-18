import React from 'react';
import './Nav.css';

function Nav() {
  const handleMenuOpen = () => {
    document.getElementById("menu").style.right = "0px";
  }

  return(
    <nav className="nav">
      <p>[Logo]</p>
      
      {/** <Search /> */}
      <input placeholder="Philadelphia, PA" />       
      <button onClick={handleMenuOpen}>☰</button>      

    </nav>
  );
}

export default Nav;