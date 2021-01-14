import React, { useState, useRef, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import MapLeaflet from "./components/MapLeaflet";
import HUD from "./components/HUD";
import SavedProps from "./components/SavedProps";
import Account from "./components/Account";
import CreateAccount from "./components/CreateAccount";
import SignIn from "./components/SignIn";
import PropertyProfile from "./components/PropertyProfile";
import AccountChild from "./components/AccountChild";
import Loading from './components/Loading';
import {
  search,
  pingServer,
  getSavedProperties,
  postSavedProperty,
  deleteSavedProperty,
} from "./APIService";
import { Context } from "./Context";
import {
  placeholderProfile,
} from "./mockData";

function App() {
  /* State */

  /* Data from API */
  let [statistics, setStatistics] = useState({
    economic: [],
    demographic: []
  });
  let [properties, setProperties] = useState([]);
  let [savedProperties, setSavedProperties] = useState([]);
  /* Properties State */
  let [currentProperty, setCurrentProperty] = useState({
    propertyData: properties[0] || placeholderProfile,
    inSavedProperties: false,
  });
  /* HUD State */
  let [pressCount, setPressCount] = useState(0);
  let [HUDPosition, setHUDPosition] = useState("");
  let [defaultTab, setDefaultTab] = useState(false);
  // Holds tab refs for each tab in HUD
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
  let [menuState, setMenuState] = useState({
    menuOffset: "-250px",
    menuVisibility: "hidden",
  });
  //Reference to node holding Nav, Map, Search, and HUD
  let mainViewNode = useRef(null);
  /* Map State */
  let [mapData, setMapData] = useState({
    zoom: 9,
    center: [39.9, -75.16],
    msaShape: {},
    tractShape: {},
    countyShape: {},
    displayLayer: {
      "Property markers": true,
      "MSA shape": true,
      "County shape": true,
      "CT shape": true,
    },
  });
  let [currentMarkerLatLng, setCurrentMarkerLatLng] = useState({
    current: [],
  });
  let [findMarker, setFindMarker] = useState(false);
  /* About page state */
  const [visited, setVisited] = useState(localStorage.getItem("visited"));
  /* Loading Indicator State */
  let [isLoading, setIsLoading] = useState(false);
  /* Server Ping State */
  let [isAwake, setIsAwake] = useState(false);

  useEffect(() => {
    if (!isAwake) {
      pingServer();
      setIsAwake(true);
    }
  }, [isAwake])

  useEffect(() => {
    if (visited === "true") {
      localStorage.setItem("visited", visited);
    } else {
      localStorage.setItem("visited", "false");
    }
  }, [visited]);


  /* Handlers */

  const handleSearch = (value) => {
    setIsLoading(true);
    search(value).then((data) => {
      setStatistics(data.apiStatistics);
      setProperties(data.properties);
      setMapData({
        ...mapData,
        msaShape: data.msa,
        countyShape: data.county,
        tractShape: data.tract,
      });
      // Used to set defaultTab to true for an instant;
      // triggers HUD events and Map events
      setDefaultTab(true);
      setDefaultTab(false);
      setIsLoading(false);  
    })  
  }

  useEffect(() => {
    getSavedProperties().then(data => {
      setSavedProperties(data)
    })
  }, [])


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
    let idToDelete;
    // Remove prop from savedProperties
    if (inSavedProps) {
      if (!prop.property) {
        idToDelete = savedProps.find((savedProp) => savedProp.property.address.streetAddress === prop.address.streetAddress).id;
      } else {
        idToDelete = savedProps.find((savedProp) => savedProp.property.address.streetAddress === prop.property.address.streetAddress).id;
      }

      inSavedProps = false;
      deleteSavedProperty(idToDelete);
    } 
    // Add propt to savedProperties
    else {
      inSavedProps = true;
      postSavedProperty({property: prop});
    }
    setCurrentProperty({ ...currentProperty, inSavedProperties: inSavedProps });
    
    // Slightly delay call to database to give it time to update the favorites
    setTimeout(() => {
      getSavedProperties().then(data => {
        setSavedProperties(data);
      });  
    }, 350);
  };

  /**
   * Closes menu if it detects a click outside of the Menu component
   * @param {object} e
   * @param {object} mainViewNode
   */
  const handleMenuClose = (e, mainViewNode) => {
    if (mainViewNode.current.contains(e.target)) {
      setMenuState({
        menuOffset: "-250px",
        menuVisibility: "hidden",
      });
    }
  };

  const handleRemoveAboutVisited = () => {
    setVisited("false");
  };

  const handleAddAboutVisited = () => {
    setVisited("true");
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
    currentMarkerLatLng,
    setCurrentMarkerLatLng,
    findMarker,
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
    handleSearch,
    currentMarkerLatLng,
    setCurrentMarkerLatLng,
    setFindMarker,
  };

  return (
    <main className='App'>
      <Context.Provider value={contextValues}>
        <Switch>
          <Route path='/account/:component'>
            <AccountChild />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
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
            <About
              aboutState={{ visited, setVisited, handleAddAboutVisited }}
            />
            <Menu
              menuState={{ menuState, setMenuState, handleRemoveAboutVisited }}
            />
            <div
              ref={mainViewNode}
              onMouseDown={(e) => handleMenuClose(e, mainViewNode)}>
              <Nav menuState={{ menuState, setMenuState }} />
              <Loading isLoading={isLoading} />
              <MapLeaflet
                defaultTab={defaultTab}
                mapState={mapState}
                properties={properties}
                HUDState={HUDState}
                
              />
              <HUD defaultTab={defaultTab} HUDState={HUDState} />
            </div>
          </Route>
        </Switch>
      </Context.Provider>
    </main>
  );
}

export default App;
