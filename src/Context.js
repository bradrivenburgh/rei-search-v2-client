import { createContext } from 'react';

export const Context = createContext({
  searchResults: {
    stats: {},
    properties: [],
  },
  currentProperty: {},
  setCurrentProperty: () => {},
  savedProperties: [], 
  setSavedProperties: () => {},
  HUDState: {
    pressCount: 0,
    HUDPosition: '',
    activeTab: {},
    setPressCount: () => {},
    setHUDPosition: () => {},
    setActiveTab: () => {},  
  },
  defaultTab: false,
  setDefaultTab: () => {},
});