import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({
  menuState: {
    menuState: { menuOffset, menuVisibility },
    setMenuState,
  },
}) {
  return (
    <>
      <div
        className='menu'
        style={{ right: menuOffset, visibility: menuVisibility }}>
        <button
          className='menu__closebtn'
          onClick={() => {
            setMenuState({
              menuOffset: "-250px",
              menuVisibility: "hidden",
            });
          }}
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
