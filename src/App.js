import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Map from "./components/Map";
import HUD from "./components/HUD";
import SavedProps from "./components/SavedProps";
import PropertyProfile from "./components/PropertyProfile";
import { Context } from "./Context";
import { stats, properties, savedProps } from "./mockData";

function App() {
  let [pressCount, setPressCount] = useState(0);
  let [HUDPosition, setHUDPosition] = useState("");
  let [defaultTab, setDefaultTab] = useState(false);
  let [savedProperties, setSavedProperties] = useState(savedProps);
  let [activeTab, setActiveTab] = useState({
    econTab: false,
    demogTab: false,
    propsTab: false,
  });
  let [savedProperties, setSavedProperties] = useState(savedProps)

  const contextValues = {
    searchResults: {
      stats,
      properties,
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
    setSavedProperties,
    defaultTab,
    setDefaultTab,
  };

  return (
    <main className='App'>
      <Context.Provider value={contextValues}>
        <Switch>
          <Route path='/property-profile'>
            <PropertyProfile />
          </Route>
          <Route path='/saved-properties'>
            <SavedProps />
          </Route>
          <Route path='/'>
            <Nav />
            <Menu />
            <Map />
            <HUD />
          </Route>
        </Switch>
      </Context.Provider>
    </main>
  );
}

export default App;