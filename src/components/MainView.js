import React from 'react';
import Nav from './Nav';
import Menu from './Menu';
import Map from './Map';
import HUD from './HUD';
import './MainView.css';

function MainView() {

  return (
    <>
      <Nav />
      <Menu />
      <Map />
      <HUD />
    </>
  );
}

export default MainView;