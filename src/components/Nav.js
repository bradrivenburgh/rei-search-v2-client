import React from "react";
import PropTypes from 'prop-types';
import Search from "./Search";
import "./Nav.css";

function Nav({ menuState: { setMenuState } }) {
  return (
    <nav className='nav'>
      <img src='https://dummyimage.com/35x35/DDD.png?text=LOGO' alt='Logo' />
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

Nav.defaultProps = {
  menuState: {
    setMenuState: () => {},
  },
};

Nav.propTypes = {
  menuState: PropTypes.shape({
    setMenuState: PropTypes.func.isRequired,
  })
}

export default Nav;