import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ menuOffset: { menuOffset, setMenuOffset } }) {
  return (
    <>
      <div className='menu' style={{ right: menuOffset }}>
        <button
          className='menu__closebtn'
          onClick={() => setMenuOffset("-250px")}>
          ☰
        </button>
        <a href='index.html'>About</a>
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
  menuOffset: {
    menuOffset: '',
    setMenuOffset: () => {}
  }
}