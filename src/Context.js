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
    activeTab: {},
    setPressCount: () => {},
    setHUDPosition: () => {},
    setActiveTab: () => {},  
  },
  mockSearch: false,
  setMockSearch: () => {},
});