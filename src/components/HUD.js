import React, { useState, useEffect } from "react";
import StatsTabs from "./StatsTabs";
import PropertiesTab from "./PropertiesTab";
import "./HUD.css";

function HUD() {
  let [pressCount, setPressCount] = useState(0);

  useEffect(() => {
    // Open the economic tab by default
    return document.getElementById("defaultOpen").click();
  }, []);

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
    document.getElementById("HUD").style.height = `${containerHeight}`;
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

    document.getElementById(category).style.display = "block";
    e.target.className += " active";

    if (pressCount === 0) {
      adjustHUDHeight(1)
    }
  };

  return (
    <section id='HUD' className='HUD'>
      <div className='HUD__nav'>
        <div className="HUD__button-container">
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
            id='defaultOpen'
            className='HUD__tab__tablinks'
            onClick={(e) => openTab(e, "economics")}>
            economics
          </button>
          <button
            className='HUD__tab__tablinks'
            onClick={(e) => openTab(e, "demographics")}>
            demographics
          </button>
          <button
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
