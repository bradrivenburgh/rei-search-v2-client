import React from 'react';
import { Context } from './Context';
import { stats } from './mockData';
import Routes from './Routes';

function App() {
  const contextValues = {
    stats,
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