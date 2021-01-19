import { createContext } from 'react';

export const Context = createContext({
  searchResults: {
    statistics: { economic: [], demographic: []},
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
  isLoading: false,
  handleAddRemoveProperty: () => {},
  handleSearch: () => {},
  currentMarkerLatLng: {},
  setCurrentMarkerLatLng: () => {},
  setFindMarker: () => {},
});