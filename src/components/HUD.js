import React, { useState, useEffect } from "react";
import StatsTabs from './StatsTabs';
import "./HUD.css";

function HUD() {
  let [pressCount, setPressCount] = useState(0);

  useEffect(() => {
    // Open the economic tab by default
    return document.getElementById("defaultOpen").click();
  }, []) 

  /**
   * Allows user to adjust height of HUD display in order
   * to view more information and less of the map.
   */
  const adjustHUDHeight = () => {
    let baseScreen = "69px";
    let thirdScreen = "33vh";
    let twoThirdsScreen = "67vh";
    let fullScreen = "100vh";

    let containerHeight;
    if (pressCount === 0) {
      containerHeight = twoThirdsScreen;
    } else if (pressCount === 1) {
      containerHeight = fullScreen;
    } else if (pressCount === 2) {
      containerHeight = baseScreen;
    } else {
      containerHeight = thirdScreen;
    }
    document.getElementById("HUD").style.height = `${containerHeight}`;

    pressCount <= 2
      ? setPressCount(pressCount + 1)
      : setPressCount((pressCount = 0));
  };

  /**
   * Hides all tab content by default and listens for click event
   * to display tab content.
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
  };

  return (
    <section id='HUD' className='HUD'>
      <div className='HUD__nav'>
        <button className='HUD__pill-button' onClick={adjustHUDHeight} />

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
          <h3>Properties</h3>
          <p>First line.</p>
        </div>
      </div>
    </section>
  );
}

export default HUD;