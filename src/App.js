import React, { useState, useRef, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import About from './components/About';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Nav from './components/Nav';
import Menu from './components/Menu';
import MapLeaflet from './components/MapLeaflet';
import HUD from './components/HUD';
import SavedProps from './components/SavedProps';
import PropertyProfile from './components/PropertyProfile';
import Loading from './components/Loading';
import BadSearch from './components/BadSearch';
import BoundaryError from './components/BoundaryError';
import {
  search,
  pingServer,
  getSavedProperties,
  postSavedProperty,
  deleteSavedProperty,
} from './services/APIService';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import PrivateRoute from './Utils/PrivateRoute';
import TokenService from './services/token-service';
import AuthApiService from './services/auth-api-service';
import IdleService from './services/idle-service';
import { Context } from './Context';
import { placeholderProfile } from './mockData';

function App() {
  /* State */

  /* Auth */
  const [loggedIn, setLoggedIn] = useState(TokenService.hasAuthToken());

  /* Data from API */
  let [statistics, setStatistics] = useState({
    economic: [],
    demographic: [],
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
  let [HUDPosition, setHUDPosition] = useState('69px');
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
    menuOffset: '-250px',
    menuVisibility: 'hidden',
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
      'Property markers': true,
      'MSA shape': true,
      'County shape': true,
      'CT shape': true,
    },
  });
  let [currentMarkerLatLng, setCurrentMarkerLatLng] = useState({
    current: [],
  });
  let [findMarker, setFindMarker] = useState(false);
  /* About page state */
  const [visited, setVisited] = useState(localStorage.getItem('visited'));
  /* BadSearch Modal */
  let [badSearch, setBadSearch] = useState(false);
  /* Loading Indicator State */
  let [isLoading, setIsLoading] = useState(false);
  /* Server Ping State */
  let [isAwake, setIsAwake] = useState(false);

  /**
   * Wake up Heroku server
   */
  useEffect(() => {
    if (!isAwake) {
      pingServer();
      setIsAwake(true);
    }
  }, [isAwake]);

  /* Handle idle logout / refresh */
  const logoutFromIdle = () => {
    // remove the token from localStorage
    TokenService.clearAuthToken();
    // remove any queued calls to the refresh endpoint
    TokenService.clearCallbackBeforeExpiry();
    // remove the timeouts that auto logout when idle
    IdleService.unRegisterIdleResets();
    setLoggedIn(TokenService.hasAuthToken());
  };

  useEffect(() => {
    //  we'll set this to logout a user when they're idle
    IdleService.setIdleCallback(logoutFromIdle);
    // if a user is logged in
    if (TokenService.hasAuthToken()) {
      // tell the idle service to register event listeners
      // to prevent logoutFromIdle
      IdleService.registerIdleTimerResets();
      // Queue a timeout just before the JWT token expires
      TokenService.queueCallbackBeforeExpiry(() => {
        // the timeout will call this callback just before the token expires
        AuthApiService.postRefreshToken();
      });
    }
    return () => {
      // when the app unmounts, stop the event listeners
      // that auto logout (clear the token from storage)
      IdleService.unRegisterIdleResets();
      // remove the refresh endpoint request
      TokenService.clearCallbackBeforeExpiry();
    };
  }, []);

  /**
   * Load saved properties when user logs in; clear them
   * when the user logs out
   */
  useEffect(() => {
    if (loggedIn) {
      getSavedProperties().then((data) => {
        setSavedProperties(data);
      });
    } else {
      // if (savedProperties.length > 0) {
      //   window.location.reload()
      // }
      setSavedProperties([]);
    }
  }, [loggedIn]);

  /**
   * If the user has visited before, do not show About
   */
  useEffect(() => {
    if (visited === 'true') {
      localStorage.setItem('visited', visited);
    } else {
      localStorage.setItem('visited', 'false');
    }
  }, [visited]);

  /* Handlers */

  /**
   * Handlers to manage visited State for About
   */
  const handleRemoveAboutVisited = () => {
    setVisited('false');
  };

  const handleAddAboutVisited = () => {
    setVisited('true');
  };

  /**
   * Query api with search value to get and set statistics
   * and properties
   * @param {string} value
   */
  const handleSearch = (value) => {
    // Start loading animation
    setIsLoading(true);

    search(value)
      .then((data) => {
        if (data.badRequest) {
          setBadSearch(true);
        }
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

        // End loading animation
        setIsLoading(false);
      })
      .catch((e) => {
        throw new Error(e);
      });
  };

  let history = useHistory();
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
    if (!loggedIn) {
      history.push('/login');
    } else {
      let newSavedProps;

      // Remove prop from savedProperties
      if (inSavedProps) {
        newSavedProps = savedProps.filter(
          (savedProp) =>
            savedProp.property.address.streetAddress !==
            prop.property.address.streetAddress
        );
        inSavedProps = false;
        deleteSavedProperty(prop.id);
      }
      // Add property to savedProperties
      else {
        newSavedProps = [...savedProps, prop];
        inSavedProps = true;
        postSavedProperty(prop);
      }
      setCurrentProperty({ ...currentProperty, inSavedProperties: inSavedProps });
      setSavedProperties(newSavedProps);
    }

  };

  /**
   * Closes menu if it detects a click outside of the Menu component
   * @param {object} e
   * @param {object} mainViewNode
   */
  const handleMenuClose = (e, mainViewNode) => {
    if (mainViewNode.current.contains(e.target)) {
      setMenuState({
        menuOffset: '-250px',
        menuVisibility: 'hidden',
      });
    }

  };

  /**
   * Uses a regular expression to insert commas in the appropriate
   * places for a value representing currency.
   * @param {number} value
   */
  const formatNumber = (value) => {
    if (value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
      return ' --- ';
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
    isLoading,
  };

  return (
    <main className='App'>
      <BoundaryError>
        <Context.Provider value={contextValues}>
          <Switch>
            <PublicOnlyRoute path='/login'>
              <Login props={setLoggedIn} />
            </PublicOnlyRoute>
            <PublicOnlyRoute path='/create-account'>
              <CreateAccount props={setLoggedIn} />
            </PublicOnlyRoute>
            <Route path='/property-profile'>
              <PropertyProfile
                currentProperty={currentProperty}
                savedProperties={savedProperties}
                onAddRemoveProperty={handleAddRemoveProperty}
                formatNumber={formatNumber}
              />
            </Route>
            <PrivateRoute path='/saved-properties'>
              <SavedProps
                savedProperties={savedProperties}
                setCurrentProperty={setCurrentProperty}
                onAddRemoveProperty={handleAddRemoveProperty}
                formatNumber={formatNumber}
              />
            </PrivateRoute>
            <PublicOnlyRoute path='/login'>
              <Login props={setLoggedIn} />
            </PublicOnlyRoute>
            <PublicOnlyRoute path='/create-account'>
              <CreateAccount props={setLoggedIn} />
            </PublicOnlyRoute>
            <Route path='/'>
              <About
                aboutState={{ visited, setVisited, handleAddAboutVisited }}
              />
              <BadSearch badSearchState={{ badSearch, setBadSearch }} />
              <Menu
                menuState={{
                  menuState,
                  setMenuState,
                  loggedIn,
                  setLoggedIn,
                  handleRemoveAboutVisited,
                }}
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
      </BoundaryError>
    </main>
  );
}

export default App;
