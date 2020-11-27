import { createContext } from 'react';

export const Context = createContext({
  statistics: {},
  setStatistics: () => {},
  properties: [],
  setProperties: () => {},  
  currentProperty: {},
  setCurrentProperty: () => {},
  savedProperties: [], 
  setSavedProperties: () => {},
  defaultTab: false,
  setDefaultTab: () => {},
});