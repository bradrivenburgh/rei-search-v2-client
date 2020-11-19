import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  /**
   * Creates ref that we will use to store the DOM node
   * of the div with id="menu".
   */
  const containingNode = useRef()

  /**
   * Adds handleMenuClose event listener to document and cleans up
   */
  useEffect(() => {
    document.addEventListener("mousedown", handleMenuClose);
    return () => {
      document.removeEventListener("mousedown", handleMenuClose);
    }
  },[])

  /**
   * Close the menu via mousedown outside the menu
   * or mousedown on the close button. Also added
   * an onClick event in the markup for accessibility.
   * @param {object} e 
   */
  const handleMenuClose = (e) => {
    if (
      !containingNode.current.contains(e.target) ||
      e.target.className === "menu__closebtn"
    ) {
      document.getElementById("menu").style.right = "-250px";
    }
  };
  
  return (
    <>
      <div id="menu" className="menu" ref={containingNode}>
        <button className="menu__closebtn" onClick={handleMenuClose}>☰</button>
        <a href="index.html">About</a>
        <a href="manage-account.html">My account</a>
        <Link to="/saved-properties">Saved properties</Link>

        <hr />
        
        <a href="create-account.html">Create account</a>
        <a href="sign-in.html">Sign-in / Sign-out</a>
      </div>

    </>
  );


}

export default Menu;