import React, { useState } from 'react';
import { Context } from './Context';
import { 
  stats, 
  properties, 
  savedProperties } from './mockData';
import Routes from './Routes';

function App() {
  let [pressCount, setPressCount] = useState(0);
  let [HUDPosition, setHUDPosition] = useState('');
  let [mockSearch, setMockSearch] = useState(false);
  let [currentTab, setCurrentTab] = useState('');
  
  const contextValues = {
    stats,
    properties,
    savedProperties,
    pressCount,
    HUDPosition,
    currentTab,
    mockSearch,
    setMockSearch,
    setPressCount,
    setHUDPosition,
    setCurrentTab,
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