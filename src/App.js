import React, { useState } from 'react';
import { Context } from './Context';
import { 
  stats, 
  properties, 
  savedProps } from './mockData';
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
  let [savedProperties, setSavedProperties] = useState(savedProps)
  
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
    setSavedProperties,
    mockSearch,
    setMockSearch,
  }

  return (
    <main className='App'>
      <Context.Provider value={contextValues}>
        <Switch>
          <Route path='/property-profile'>
            <PropertyProfile />
          </Route>
          <Route path='/saved-properties'>
            <SavedProps />
          </Route>
          <Route path='/'>
            <Nav />
            <Menu />
            <Map />
            <HUD />
          </Route>
        </Switch>
      </Context.Provider>
    </main>
  );
}

export default App;