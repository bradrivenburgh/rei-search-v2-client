import React from 'react';
import './MainView.css';
import Nav from './Nav';
import Menu from './Menu';
import Map from './Map';
import HUD from './HUD';

function MainView() {
  return(
    <>
      <Nav />
      <Menu />
      <Map />
      <HUD />
    </>
  );
}

export default MainView;