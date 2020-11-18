import React, { useContext } from 'react';
import { Context } from '../Context';
import './Menu.css';

function Menu() {
  const { closeMenu } = useContext(Context);


  return (
    <>
      <div id="menu" className="menu">
        <button className="menu__closebtn" onClick={() => closeMenu()}>☰</button>
        <a href="index.html">About</a>
        <a href="manage-account.html">My account</a>
        <a href="saved-properties.html">Saved properties</a>

        <hr />
        
        <a href="create-account.html">Create account</a>
        <a href="sign-in.html">Sign-in / Sign-out</a>
      </div>

    </>
  );


}

export default Menu;