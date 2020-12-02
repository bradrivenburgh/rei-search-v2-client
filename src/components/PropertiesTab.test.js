import React, {useState, useRef} from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../Context';
import { fakeProps, fakeStats, savedProps } from '../mockData';
import PropertiesTab from './PropertiesTab';

function TestComponent() {
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
      <PropertiesTab />
    </Context.Provider>
    );
}

describe("PropertiesTab", () => {
  test('renders to the DOM', () => {
    render(
      <BrowserRouter>
        <TestComponent />
      </BrowserRouter>);
  });
    
  test('contains an "Properties" heading', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <TestComponent />
      </BrowserRouter>);

    expect(getByRole("heading", { name: /properties/i })).toBeInTheDocument();
  });

  test('pressing Add/Remove button toggles aria-pressed value', () => {
    render(
      <BrowserRouter>
        <TestComponent />
      </BrowserRouter>);
      const allFalseBefore = screen.getAllByRole("button", { pressed: false });
      fireEvent.click(allFalseBefore[0]);
      const allFalseAfter = screen.getAllByRole("button", { pressed: false });
      expect(allFalseAfter.length).toBeLessThan(allFalseBefore.length);
      screen.debug()
  });

});