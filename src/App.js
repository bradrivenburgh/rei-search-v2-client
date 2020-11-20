import React, { useState } from 'react';
import { Context } from './Context';
import { 
  stats, 
  properties, 
  savedProperties } from './mockData';
import Routes from './Routes';

function App() {

  let [mockSearch, setMockSearch] = useState(false)
  
  const contextValues = {
    stats,
    properties,
    savedProperties,
    mockSearch,
    setMockSearch
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