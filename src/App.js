import React, { useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Map from "./components/Map";
import HUD from "./components/HUD";
import SavedProps from "./components/SavedProps";
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

  return (
    <main className='App'>
      <Context.Provider value={contextValues}>
        <Switch>
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
              <HUD defaultTab={defaultTab} HUDState={HUDState} />
            </div>
          </Route>
        </Switch>
      </Context.Provider>
    </main>
  );
}

export default App;