import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({
  menuState: {
    menuState: { menuOffset, menuVisibility },
    setMenuState,
  },
}) {

  const handleMenuClose = (e) => {
    if (e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button") {
      setMenuState({
        menuOffset: "-250px",
        menuVisibility: "hidden",
      });
    }
  };

  return (
    <>
      <div
        className='menu'
        onClick={(e) => handleMenuClose(e)}
        style={{ right: menuOffset, visibility: menuVisibility }}>
        <button
          className='menu__closebtn'
          tabIndex='8'>
          ☰
        </button>
        <Link to='/about'>About</Link>
        <Link to='/account'>My account</Link>
        <Link to='/saved-properties'>Saved properties</Link>

        <hr />

        <Link to='/create-account'>Create account</Link>
        <Link to='/sign-in'>Sign-in / Sign-out</Link>
      </div>
    </>
  );
}

export default Menu;  

Menu.defaultProps = {
  menuState: {
    menuState: { 
      menuOffset: "0px", 
      menuVisibility: "visible" 
    },
    setMenuState: () => {},
  }
};
