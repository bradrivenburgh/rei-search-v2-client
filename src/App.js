import React, { useState } from "react";
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
  let [statistics, setStatistics] = useState(fakeStats);
  let [properties, setProperties] = useState(fakeProps);
  let [savedProperties, setSavedProperties] = useState(savedProps);
  let [currentProperty, setCurrentProperty] = useState({
    propertyData: properties[0],
    inSavedProperties: false,
  });
  let [pressCount, setPressCount] = useState(0);
  let [HUDPosition, setHUDPosition] = useState("");
  let [defaultTab, setDefaultTab] = useState(false);
  let [activeTab, setActiveTab] = useState({
    econTab: false,
    demogTab: false,
    propsTab: false,
  });
  
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
    setProperties
  }

  const contextValues = {
    searchResults,
    savedProperties,
    setSavedProperties,
    currentProperty,
    setCurrentProperty,
    defaultTab,
    setDefaultTab,
  };

  const handleSaveRemoveProperty = (
    inSavedProps = currentProperty.inSavedProperties,
    prop = currentProperty.propertyData,
    savedProps = savedProperties,
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


  return (
    <main className='App'>
      <Context.Provider value={contextValues}>
        <Switch>
          <Route path='/property-profile'>
            <PropertyProfile
              currentProperty={currentProperty}
              onSaveRemoveProperty={handleSaveRemoveProperty}
            />
          </Route>
          <Route path='/saved-properties'>
            <SavedProps onSaveRemoveProperty={handleSaveRemoveProperty} />
          </Route>
          <Route path='/'>
            <Nav />
            <Menu />
            <Map />
            <HUD defaultTab={defaultTab} HUDState={HUDState} />
          </Route>
        </Switch>
      </Context.Provider>
    </main>
  );
}

export default App;