import { createContext } from 'react';

export const Context = createContext({
  searchResults: {
    stats: {},
    properties: [],
  },
  savedProperties: [],
  HUDState: {
    pressCount: 0,
    HUDPosition: '',
    currentTab: [],
    setPressCount: () => {},
    setHUDPosition: () => {},
    setCurrentTab: () => {},  
  },
  mockSearch: false,
  setMockSearch: () => {},
});