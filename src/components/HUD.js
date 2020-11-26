import React, {useEffect, useContext } from "react";
import { Context } from '../Context';
import StatsTabs from "./StatsTabs";
import PropertiesTab from "./PropertiesTab";
import "./HUD.css";

function HUD() {
  /* STATE FROM CONTEXT */

  let {
    HUDState: {
      pressCount,
      HUDPosition,
      activeTab,
      setPressCount,
      setHUDPosition,
      setActiveTab,
    },
    defaultTab,
    setDefaultTab,
  } = useContext(Context);

  /**
   * Returns object with preset HUD height settings 
   */
  const HUDHeights = () => {
    return {
      baseScreen: "69px",
      oneThirdScreen: "33vh",
      twoThirdsScreen: "67vh",
      fullScreen: "100vh",
    };
  }

  /**
   * Open the economic tab by default after search submitted;
   * or open the last active tab selected after search submitted
   */
  useEffect(() => {
    const { oneThirdScreen } = HUDHeights();
    if (defaultTab) {
      if (pressCount === 0) {
        if (!(activeTab.demogTab || activeTab.propsTab)) {
          setActiveTab({ ...activeTab, econTab: true });
        }
        setHUDPosition(oneThirdScreen);
      }
    }
    setDefaultTab(false);
  });

  /* FUNCTIONS FOR HUD BEHAVIOR */

  /**
   * Allows user to adjust height of HUD display in order
   * to view more information and less of the map.
   * @param {number} pressCount
   * @param {object} allHUDHeights
   */
  const handleHUDHeight = (pressCount, allHUDHeights = HUDHeights()) => {
    // HUD to baseScreen
    if (pressCount > 3) {
      pressCount = 0;
    }
    // HUD to fullScreen
    else if (pressCount < 0) {
      pressCount = 3;
    }
    setPressCount(pressCount);

    // Set HUDPosition; pressCount === 0 || 1 || 2 || 3
    // corresponding to ["69px","33vh","67vh","100vh"]
    setHUDPosition(Object.values(allHUDHeights)[pressCount]); 
  };

  /**
   * Helper function used to reduce repetition when calling 
   * setActiveTab()
   * @param {string} activeTab 
   */
  const changeActiveValue = (activeTab) => {
    const tabs = {
      econTab: false,
      demogTab: false,
      propsTab: false
    }
    tabs[activeTab] = true;
    return tabs;
  }

  /**
   * Listens for click event to display tab content.  Calls 
   * adjustHeight() if the HUD is collapsed in order to show content.
   * @param {object} e
   */
  const handleOpenTab = (e) => {
    // Expand HUD if tab is clicked when just tabs are showing
    if (pressCount === 0) {
      handleHUDHeight(1);
    }
    // Reveal tab content and highlight selected tab
    e.target.id === "economics-btn"
      ? setActiveTab(changeActiveValue("econTab")) : 
    e.target.id === "demographics-btn"
      ? setActiveTab(changeActiveValue("demogTab"))
      : setActiveTab(changeActiveValue("propsTab"));
  };

  return (
    <section id='HUD' className='HUD' style={{ height: HUDPosition }}>
      <div className='HUD__nav'>
        <div className='HUD__button-container'>
          <button
            className='HUD__expand-button'
            onClick={() => handleHUDHeight(pressCount + 1)}>
            {pressCount === 3 ? <>&#95;</> : <>&#9650;</>}
          </button>
          <button
            className='HUD__contract-button'
            onClick={() => handleHUDHeight(pressCount - 1)}>
            {pressCount === 0 ? <>&#x26F6;</> : <>&#9660;</>}
          </button>
        </div>
        <div className='HUD__tab'>
          <button
            id='economics-btn'
            className={
              activeTab.econTab
                ? "HUD__tab__tablinks active"
                : "HUD__tab__tablinks"
            }
            onClick={(e) => handleOpenTab(e)}>
            economics
          </button>
          <button
            id='demographics-btn'
            className={
              activeTab.demogTab
                ? "HUD__tab__tablinks active"
                : "HUD__tab__tablinks"
            }
            onClick={(e) => handleOpenTab(e)}>
            demographics
          </button>
          <button
            id='properties-btn'
            className={
              activeTab.propsTab
                ? "HUD__tab__tablinks active"
                : "HUD__tab__tablinks"
            }
            onClick={(e) => handleOpenTab(e)}>
            properties
          </button>
        </div>
      </div>

      <div className='HUD__tabcontent__container'>
        <div
          className='HUD__tabcontent'
          style={{ display: activeTab.econTab ? "block" : "none" }}>
          <StatsTabs id='economics' />
        </div>

        <div
          className='HUD__tabcontent'
          style={{ display: activeTab.demogTab ? "block" : "none" }}>
          <StatsTabs id='demographics' />
        </div>

        <div
          className='HUD__tabcontent'
          style={{ display: activeTab.propsTab ? "block" : "none" }}>
          <PropertiesTab />
          {/* <PropertiesTab onPropertyClick=props.onPropertyClick /> */}
        </div>
      </div>
    </section>
  );
}

export default HUD;
