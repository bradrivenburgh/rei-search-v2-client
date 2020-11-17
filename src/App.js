import React from 'react';
import { Context } from './Context';
import { stats, properties } from './mockData';
import Routes from './Routes';

function App() {
  const contextValues = {
    stats,
    properties
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