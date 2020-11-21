import { createContext } from 'react';

export const Context = createContext({
  stats: {},
  properties: [],
  savedProperties: [],
  pressCount: 0,
  HUDPosition: '',
  currentTab: '',
  mockSearch: false,
  setMockSearch: () => {},
  setPressCount: () => {},
  setHUDPosition: () => {},
  setCurrentTab: () => {},
});