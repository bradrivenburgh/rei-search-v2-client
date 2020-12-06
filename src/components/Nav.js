import React from "react";
import Search from "./Search";
import "./Nav.css";

function Nav({ setMenuOffset }) {
  return (
    <nav className='nav'>
      <img src='https://via.placeholder.com/35x35?text=LOGO' alt='Logo' />
      <Search />
      <button className='menu-button' onClick={() => setMenuOffset("0px")}>☰</button>
    </nav>
  );
}

export default Nav;

Nav.defaultProps = {
  setMenuOffset: () => {}
}
