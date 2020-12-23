import { createContext } from 'react';

export const Context = createContext({
  searchResults: {
    statistics: {},
    setStatistics: () => {},
    properties: [],
    setProperties: () => {},    
  },
  currentProperty: {},
  setCurrentProperty: () => {},
  savedProperties: [], 
  setSavedProperties: () => {},
  defaultTab: false,
  setDefaultTab: () => {},
  handleAddRemoveProperty: () => {},
  handleAPICall: () => {},
  currentMarkerLatLng: {},
  setCurrentMarkerLatLng: () => {},
  setFindMarker: () => {},
});