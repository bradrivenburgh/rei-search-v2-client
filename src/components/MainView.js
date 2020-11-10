import React, {useContext} from 'react';
import './MainView.css';
import Nav from './Nav';
import Map from './Map';
import HUD from './HUD';

function MainView() {
  return(
    <>
      <Nav />
      <Map />
      <HUD />
    </>
  );
}

export default MainView;