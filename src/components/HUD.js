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
      currentTab,
      setPressCount,
      setHUDPosition,
      setCurrentTab,
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

  /* SEARCH; LIFE CYCLE METHODS TO PERSIST HUD STATE */

  /**
   * Open the economic tab by default after search submitted;
   * or open the last active tab selected after search submitted
   */
  useEffect(() => {
    if (mockSearch) {
      currentTab.length === 0
        ? document.getElementById("economics-btn").click()
        : document.getElementById(currentTab[0]).click();
    }
    setMockSearch(false);
  }, [mockSearch, currentTab, setMockSearch]);

  /**
   * Changes the height of HUD; works when navigating back to HUD
   */
  useEffect(() => {
    document.getElementById("HUD").style.height = `${HUDPosition}`;
  }, [HUDPosition]);

  /**
   * Maintains the current tab selected if the user navigates away
   * from mainView
   */
  useEffect(() => {
    const { baseScreen } = allHUDHeights;

    if (currentTab.length === 0) {
      return;
    } else {
      // Don't change HUD height, only add "active class" if
      // navigated away from HUD at baseScreen height
      HUDPosition === baseScreen
        ? (document.getElementById(currentTab[0]).className += " active")
        : document.getElementById(currentTab[0]).click();
    }
  }, [currentTab, HUDPosition, allHUDHeights]);

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
    setHUDPosition(Object.values(HUDHeights)[pressCount]); // ["69px","33vh","67vh","100vh"]
  };

  /**
   * Hides all tab content by default and listens for click event
   * to display tab content.  Also, calls adjustHeight() if the HUD
   * is collapsed all the way in order to show content.
   * @param {object} e
   * @param {string} category
   */
  const openTab = (e, category) => {
    let tabContent = document.getElementsByClassName("HUD__tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    let tabLinks = document.getElementsByClassName("HUD__tab__tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Only run setCurrentTab if user changes tabs
    if (!currentTab.includes(e.target.id)) {
      setCurrentTab((currentTab = [e.target.id, e.target]));
    }
    // Expand HUD if tab is clicked when just tabs are showing
    if (pressCount === 0) {
      adjustHUDHeight(1);
    }

    // Reveal tab content and highlight selected tab
    document.getElementById(category).style.display = "block";
    e.target.className += " active";
  };

  return (
    <section id='HUD' className='HUD'>
      <div className='HUD__nav'>
        <div className='HUD__button-container'>
          <button
            className='HUD__expand-button'
            onClick={() => adjustHUDHeight(1)}>
             {pressCount === 3 ? <>&#95;</> : <>&#9650;</> }
          </button>
          <button
            className='HUD__contract-button'
            onClick={() => adjustHUDHeight(-1)}>
            {pressCount === 0 ? <>&#x26F6;</> : <>&#9660;</> }
          </button>
        </div>
        <div className='HUD__tab'>
          <button
            id='economics-btn'
            className='HUD__tab__tablinks'
            onClick={(e) => openTab(e, "economics")}>
            economics
          </button>
          <button
            id='demographics-btn'
            className='HUD__tab__tablinks'
            onClick={(e) => openTab(e, "demographics")}>
            demographics
          </button>
          <button
            id='properties-btn'
            className='HUD__tab__tablinks'
            onClick={(e) => openTab(e, "properties")}>
            properties
          </button>
        </div>
      </div>

      <div className='HUD__tabcontent__container'>
        <div id='economics' className='HUD__tabcontent'>
          <StatsTabs id='economics' />
        </div>

        <div id='demographics' className='HUD__tabcontent'>
          <StatsTabs id='demographics' />
        </div>

        <div id='properties' className='HUD__tabcontent'>
          <PropertiesTab />
        </div>
      </div>
    </section>
  );
}

export default HUD;
