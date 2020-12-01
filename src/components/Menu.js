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
        <a href='manage-account.html'>My account</a>
        <Link to='/saved-properties'>Saved properties</Link>

        <hr />

        <a href='create-account.html'>Create account</a>
        <a href='sign-in.html'>Sign-in / Sign-out</a>
      </div>
    </>
  );
}

export default Menu;
