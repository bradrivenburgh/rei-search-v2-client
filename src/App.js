import React from 'react';
import { Context } from './Context';
import { economicData } from './mockData';
import Routes from './Routes';

function App() {
  const contextValues = {
    economicData,
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