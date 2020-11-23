import React, { useEffect, useContext } from "react";
import { Context } from '../Context';
import StatsTabs from "./StatsTabs";
import PropertiesTab from "./PropertiesTab";
import "./HUD.css";

function HUD() {
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

  /**
   * Open the economic tab by default after search submitted;
   * or open the last active tab selected after search submitted
   */
  useEffect(() => {
    if (mockSearch && currentTab.length === 0) {
      document.getElementById("economics-btn").click();
    } else if (mockSearch && currentTab.length > 0) {
      document.getElementById(currentTab[0]).click();
    }
    setMockSearch(false);
  }, [mockSearch, setMockSearch, currentTab]);

  /**
   * Changes the height of HUD; works when navigating back to HUD
   */
  useEffect(() => {
    document.getElementById("HUD").style.height = `${HUDPosition}`;
  }, [HUDPosition]);

  // Maintains the current tab selected if the user navigates away
  // from the mainView
  useEffect((baseScreen = "69px") => {
    if (currentTab.length === 0) {
      return;
    }
    // Don't change HUD height, only add "active class" if 
    // navigated away from HUD at baseScreen height 
      else if (currentTab.length > 0 && HUDPosition === baseScreen) {
      document.getElementById(currentTab[0]).className += " active";
    } else {
      document.getElementById(currentTab[0]).click();
    }
  }, [currentTab, HUDPosition]);

  /**
   * Allows user to adjust height of HUD display in order
   * to view more information and less of the map.
   */
  const adjustHUDHeight = (value = 0) => {
    let baseScreen = "69px";
    let oneThirdScreen = "33vh";
    let twoThirdsScreen = "67vh";
    let fullScreen = "100vh";
    let containerHeight;

    if (value > 0 && pressCount >= 0 && pressCount <= 2) {
      setPressCount((pressCount += value));
    } else if (value > 0 && pressCount === 3) {
      setPressCount((pressCount = 0));
    } else if (value < 0 && pressCount > 0 && pressCount <= 3) {
      setPressCount((pressCount += value));
    } else if (value < 0 && pressCount === 0) {
      setPressCount((pressCount = 3));
    }

    if (pressCount === 0) {
      containerHeight = baseScreen;
    } else if (pressCount === 1) {
      containerHeight = oneThirdScreen;
    } else if (pressCount === 2) {
      containerHeight = twoThirdsScreen;
    } else if (pressCount === 3) {
      containerHeight = fullScreen;
    }
    setHUDPosition((HUDPosition = containerHeight));
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
            &#9650;
          </button>
          <button
            className='HUD__contract-button'
            onClick={() => adjustHUDHeight(-1)}>
            &#9660;
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
