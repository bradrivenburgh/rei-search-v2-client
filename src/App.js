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
  let [activeTab, setActiveTab] = useState({
    econTab: false,
    demogTab: false,
    propsTab: false
  });
  
  const contextValues = {
    searchResults: {
      stats,
      properties,
    },
    HUDState: {
      pressCount,
      HUDPosition,
      activeTab,
      setPressCount,
      setHUDPosition,
      setActiveTab,    
    },
    savedProperties,
    mockSearch,
    setMockSearch,
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