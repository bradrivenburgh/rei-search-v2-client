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
  let [pressCount, setPressCount] = useState(0);
  let [HUDPosition, setHUDPosition] = useState("");
  let [defaultTab, setDefaultTab] = useState(false);
  let [activeTab, setActiveTab] = useState({
    econTab: false,
    demogTab: false,
    propsTab: false,
  });
  let [savedProperties, setSavedProperties] = useState(savedProps);
  let [currentProperty, setCurrentProperty] = useState(properties[0]);

  const contextValues = {
    searchResults: {
      statistics,
      setStatistics,
      properties,
      setProperties
    },
    HUDState: {
      pressCount,
      HUDPosition,
      activeTab,
      setPressCount,
      setHUDPosition,
      setActiveTab,
    },
    savedProperties,
    currentProperty,
    setCurrentProperty,
    setSavedProperties,
    defaultTab,
    setDefaultTab,
  };


  return (
    <main className='App'>
      <Context.Provider value={contextValues}>
        <Switch>
          <Route path='/property-profile'>
            <PropertyProfile currentProperty={currentProperty}/>
          </Route>
          <Route path='/saved-properties'>
            <SavedProps />
          </Route>
          <Route path='/'>
            <Nav />
            <Menu />
            <Map />
            <HUD defaultTab={defaultTab} />
          </Route>
        </Switch>
      </Context.Provider>
    </main>
  );
}

export default App;