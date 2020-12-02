import React, {useState, useRef} from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../Context';
import { fakeProps, fakeStats, savedProps } from '../mockData';

function TestWrapper({children}) {
  /* Data from API */
  let [statistics, setStatistics] = useState(fakeStats);
  let [properties, setProperties] = useState(fakeProps);
  /* Properties State */
  let [savedProperties, setSavedProperties] = useState(savedProps);
  let [currentProperty, setCurrentProperty] = useState({
    propertyData: properties[0],
    inSavedProperties: false,
  });
  /* HUD State */
  let [pressCount, setPressCount] = useState(0);
  let [HUDPosition, setHUDPosition] = useState("");
  let [defaultTab, setDefaultTab] = useState(false);
  let [activeTab, setActiveTab] = useState({
    econTab: false,
    demogTab: false,
    propsTab: false,
  });
  /* Menu State */
  let [menuOffset, setMenuOffset] = useState("-250px");
  //Reference to node outside of Menu for handleMenuClose
  let mainViewNode = useRef(null);

  /* Handlers */

  /**
   * Adds or removes a property from the savedProperties array
   * @param {boolean} inSavedProps 
   * @param {object} prop 
   * @param {array} savedProps 
   */
  const handleAddRemoveProperty = (
    inSavedProps = false,
    prop = {},
    savedProps = []
  ) => {
    let newSavedProps;
    // Remove prop from savedProps
    if (inSavedProps) {
      newSavedProps = savedProps.filter((savedProp) => {
        return savedProp.address.streetAddress !== prop.address.streetAddress;
      });
      inSavedProps = false;
    }
    // Add prop to savedProps
    else {
      inSavedProps = true;
      newSavedProps = [...savedProps, prop];
    }
    setCurrentProperty({ ...currentProperty, inSavedProperties: inSavedProps });
    setSavedProperties(newSavedProps);
  };

  /**
   * Closes menu if it detects a click outside of the Menu component
   * @param {object} e 
   * @param {object} mainViewNode 
   */
  const handleMenuClose = (e, mainViewNode) => {
    if (mainViewNode.current.contains(e.target)) {
      setMenuOffset("-250px");
    }
  };

  /* Objects with state values */

let HUDState = {
    pressCount,
    setPressCount,
    HUDPosition,
    setHUDPosition,
    activeTab,
    setActiveTab,
  };

  let searchResults = {
    statistics,
    setStatistics,
    properties,
    setProperties,
  };

  /* Context values */

  const contextValues = {
    searchResults,
    savedProperties,
    setSavedProperties,
    currentProperty,
    setCurrentProperty,
    defaultTab,
    setDefaultTab,
    handleAddRemoveProperty,
  };

  return(
  <Context.Provider value={contextValues}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Context.Provider>
  );
}

export default TestWrapper;