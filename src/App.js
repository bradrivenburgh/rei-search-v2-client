import React, { useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import MapLeaflet from "./components/MapLeaflet";
import HUD from "./components/HUD";
import SavedProps from "./components/SavedProps";
import CreateAccount from "./components/CreateAccount";
import SignIn from "./components/SignIn";
import PropertyProfile from "./components/PropertyProfile";
import { Context } from "./Context";
import { fakeStats, fakeProps, savedProps, phillyMSAGeoJson, phillyTractGeoJson } from "./mockData";

function App() {
  /* State */

  /* Data from API */
  let [statistics, setStatistics] = useState({});
  let [properties, setProperties] = useState([]);
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
    propsTab: 0,
  });
  /* Menu State */
  let [menuOffset, setMenuOffset] = useState("-250px");
  //Reference to node holding Nav, Map, Search, and HUD
  let mainViewNode = useRef(null);
  /* Map State */
  let [mapData, setMapData] = useState({
    lat: 39.971867614829016,
    lng: -75.11917011259358,
    zoom: 9,
    center: [39.9, -75.16],
    msaShape: {},
    tractShape: {},
    displayLayer: {
      "Property markers": true,
      "MSA shape": true,
      "CT shape": true
    }
  });

  /* Handlers */

  const handleAPICall = () => {
    setStatistics(fakeStats);
    setProperties(fakeProps);
    setMapData({
      ...mapData,
      msaShape: phillyMSAGeoJson,
      tractShape: phillyTractGeoJson
    });
  };

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
    setHUDScrollTops,
  };

  let searchResults = {
    statistics,
    setStatistics,
    properties,
    setProperties,
  };

  let mapState = {
    mapData,
    setMapData,
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
    handleAPICall,
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
              <MapLeaflet
                defaultTab={defaultTab}
                mapState={mapState}
                properties={properties}
              />
              <HUD
                ref={mainViewNode}
                defaultTab={defaultTab}
                HUDState={HUDState}
              />
            </div>
          </Route>
        </Switch>
      </Context.Provider>
    </main>
  );
}

export default App;
