import React from 'react';
import { Context } from './Context';
import { stats, properties, savedProperties } from './mockData';
import Routes from './Routes';

function App() {
  const contextValues = {
    stats,
    properties,
    savedProperties,
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