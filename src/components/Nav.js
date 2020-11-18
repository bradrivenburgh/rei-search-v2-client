import React, { useContext } from 'react';
import { Context } from '../Context';
import './Nav.css';

function Nav() {
  const { openMenu } = useContext(Context);

  return(
    <nav className="nav">
      <p>[Logo]</p>
      
      {/** <Search /> */}
      <input placeholder="Philadelphia, PA" />       
      <button onClick={() => openMenu()}>☰</button>      

    </nav>
  );
}

export default Nav;