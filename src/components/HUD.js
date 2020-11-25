import React, {useState, useEffect, useContext } from "react";
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
    mockSearch,
    setMockSearch,
  } = useContext(Context);

  /* LOCAL STATE */

  const [allHUDHeights] = useState({
    baseScreen: "69px",
    oneThirdScreen: "33vh",
    twoThirdsScreen: "67vh",
    fullScreen: "100vh",
  });

  /**
   * Open the economic tab by default after search submitted;
   * or open the last active tab selected after search submitted
   */
  useEffect(() => {
    const { oneThirdScreen } = allHUDHeights;
    if (mockSearch) {
      if (pressCount === 0) {
        if (activeTab.demogTab || activeTab.propsTab) {
          setHUDPosition(oneThirdScreen);
        } else {
          setHUDPosition(oneThirdScreen);
          setActiveTab({...activeTab, econTab: true});
        }
      }
    }
    setMockSearch(false);
  }, [mockSearch, setMockSearch, activeTab, setActiveTab, pressCount, allHUDHeights, setHUDPosition]);

  /* FUNCTIONS FOR HUD BEHAVIOR */

  /**
   * Allows user to adjust height of HUD display in order
   * to view more information and less of the map.
   * @param {number} pressCountAdj
   * @param {object} HUDHeights
   */
  const adjustHUDHeight = (pressCountAdj = 0, HUDHeights = allHUDHeights) => {
    // HUD to baseScreen
    if (pressCountAdj > 0 && pressCount === 3) {
      setPressCount((pressCount = 0));
    }
    // HUD to fullScreen
    else if (pressCountAdj < 0 && pressCount === 0) {
      setPressCount((pressCount = 3));
    }
    // HUD up and down
    else {
      setPressCount((pressCount += pressCountAdj));
    }

    // Set HUDPosition state; pressCount === 0 || 1 || 2 || 3
    // corresponding to ["69px","33vh","67vh","100vh"]
    setHUDPosition(Object.values(HUDHeights)[pressCount]); 
  };

  /**
   * Listens for click event to display tab content.  Calls 
   * adjustHeight() if the HUD is collapsed in order to show content.
   * @param {object} e
   */
  const openTab = (e) => {
    // Expand HUD if tab is clicked when just tabs are showing
    if (pressCount === 0) {
      adjustHUDHeight(1);
    }

    // Reveal tab content and highlight selected tab
    e.target.id === "economics-btn"
      ? setActiveTab({
          econTab: true,
          demogTab: false,
          propsTab: false,
        })
      : e.target.id === "demographics-btn"
      ? setActiveTab({
          econTab: false,
          demogTab: true,
          propsTab: false,
        })
      : setActiveTab({
          econTab: false,
          demogTab: false,
          propsTab: true,
        });
  };

  return (
    <section id='HUD' className='HUD' style={{ height: HUDPosition }}>
      <div className='HUD__nav'>
        <div className='HUD__button-container'>
          <button
            className='HUD__expand-button'
            onClick={() => adjustHUDHeight(1)}>
            {pressCount === 3 ? <>&#95;</> : <>&#9650;</>}
          </button>
          <button
            className='HUD__contract-button'
            onClick={() => adjustHUDHeight(-1)}>
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
            onClick={(e) => openTab(e)}>
            economics
          </button>
          <button
            id='demographics-btn'
            className={
              activeTab.demogTab
                ? "HUD__tab__tablinks active"
                : "HUD__tab__tablinks"
            }
            onClick={(e) => openTab(e)}>
            demographics
          </button>
          <button
            id='properties-btn'
            className={
              activeTab.propsTab
                ? "HUD__tab__tablinks active"
                : "HUD__tab__tablinks"
            }
            onClick={(e) => openTab(e)}>
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
        </div>
      </div>
    </section>
  );
}

export default HUD;
