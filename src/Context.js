import { createContext } from 'react';

export const Context = createContext({
  searchResults: {
    statistics: {},
    setStatistics: () => {},
    properties: [],
    setProperties: () => {}
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