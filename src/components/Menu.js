import React from 'react';
import './Menu.css';

function Menu() {

  const openMenu = () => {
    document.getElementById("menu").style.right = "0px";
  }
  
  const closeMenu = () => {
    document.getElementById("menu").style.right = "-250px";
  }

  return (
    <>
      <div id="menu" class="menu">
        <button class="menu__closebtn" onClick={() => closeMenu()}>☰</button>
        <a href="index.html">About</a>
        <a href="manage-account.html">My account</a>
        <a href="saved-properties.html">Saved properties</a>

        <hr />
        
        <a href="create-account.html">Create account</a>
        <a href="sign-in.html">Sign-in / Sign-out</a>
      </div>

      <button class="menu__openbtn" onClick={() => openMenu()}>☰</button>      
    </>
  );


}

export default Menu;