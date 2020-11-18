import React from 'react';
import { Context } from './Context';
import { stats, properties } from './mockData';
import Routes from './Routes';

function App() {
  const openMenu = () => {
    document.getElementById("menu").style.right = "0px";
  }
  const closeMenu = () => {
    document.getElementById("menu").style.right = "-250px";
  }

  const contextValues = {
    stats,
    properties,
    openMenu,
    closeMenu,
  }

  return (
    <main className='App'>
      <Context.Provider value={contextValues}>
        { Routes }
      </Context.Provider>
    </main>
  );
}

export default App;