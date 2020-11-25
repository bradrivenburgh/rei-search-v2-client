import React, { useState } from 'react';
import Nav from './Nav';
import Menu from './Menu';
import Map from './Map';
import HUD from './HUD';
import './MainView.css';

function MainView() {
  let [displayTab, setDisplayTab] = useState({
    econTab: false,
    demogTab: false,
    propsTab: false
  });


  return (
    <>
      <Nav />
      <Menu />
      <Map />
      <HUD displayTab={displayTab} setDisplayTab={setDisplayTab} />
    </>
  );
}

export default MainView;