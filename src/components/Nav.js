import React from "react";
import Search from "./Search";
import "./Nav.css";

function Nav({ menuState: { setMenuState } }) {
  return (
    <nav className='nav'>
      <img src='https://via.placeholder.com/35x35?text=LOGO' alt='Logo' />
      <Search />
      <button
        className='menu-button'
        tabIndex='7'
        onClick={() => {
          setMenuState({
            menuOffset: "0px",
            menuVisibility: "visible",
          });
        }}>
        ☰
      </button>
    </nav>
  );
}

export default Nav;

Nav.defaultProps = {
  setMenuOffset: () => {},
};
