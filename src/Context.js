import { createContext } from 'react';

export const Context = createContext({
  stats: {},
  properties: [],
  savedProperties: [],
  mockSearch: false,
  setMockSearch: () => {},
});