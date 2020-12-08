import React, { useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Map from "./components/Map";
import HUD from "./components/HUD";
import SavedProps from "./components/SavedProps";
import CreateAccount from './components/CreateAccount';
import SignIn from './components/SignIn';
import PropertyProfile from "./components/PropertyProfile";
import { Context } from "./Context";
import { fakeStats, fakeProps, savedProps } from "./mockData";

function App() {
  /* State */

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
  // Will hold refs in HUD in state
  let [activeTab, setActiveTab] = useState({
    econTab: null,
    demogTab: null,
    propsTab: null,
  });
  // Holds the scrollTop value for each tab in HUD
  let [HUDScrollTops, setHUDScrollTops] = useState({
    econTab: 0,
    demogTab: 0,
    propsTab: 0
  });
  /* Menu State */
  let [menuOffset, setMenuOffset] = useState("-250px");
  //Reference to node holding Nav, Map, Search, and HUD
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
    HUDScrollTops,
    setHUDScrollTops
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

  return (
    <main className='App'>
      <Context.Provider value={contextValues}>
        <Switch>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/create-account'>
            <CreateAccount />
          </Route>
          <Route path='/property-profile'>
            <PropertyProfile
              currentProperty={currentProperty}
              savedProperties={savedProperties}
              onAddRemoveProperty={handleAddRemoveProperty}
            />
          </Route>
          <Route path='/saved-properties'>
            <SavedProps
              savedProperties={savedProperties}
              setCurrentProperty={setCurrentProperty}
              onAddRemoveProperty={handleAddRemoveProperty}
            />
          </Route>
          <Route path='/'>
            <Menu menuOffset={{ menuOffset, setMenuOffset }} />
            <div
              ref={mainViewNode}
              onMouseDown={(e) => handleMenuClose(e, mainViewNode)}>
              <Nav setMenuOffset={setMenuOffset} />
              <Map />
              <HUD ref={mainViewNode} defaultTab={defaultTab} HUDState={HUDState} />
            </div>
          </Route>
        </Switch>
      </Context.Provider>
    </main>
  );
}

export default App;