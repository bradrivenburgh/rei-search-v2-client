import React, { useState } from "react";
import "./HUD.css";

function HUD() {
  let [pressCount, setPressCount] = useState(0);

  /**
   * Adust offset instead of height property to control
   * the HUD's height.
   */
  // const adjustHUDHeight = () => {
  //   let offset;

  //   if (pressCount === 0) {
  //     offset = "-33vh";
  //   } else if (pressCount === 1) {
  //     offset = "-6vh";
  //   } else if (pressCount === 2) {
  //     offset = "-91vh";
  //   } else {
  //     offset = "-67vh";
  //   }
  //   document.getElementById("HUD").style.bottom = `${offset}`;

  //   pressCount <= 2
  //   ? setPressCount(pressCount + 1)
  //   : setPressCount(pressCount = 0);
  // }

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

  const openTab = (e, cityName) => {
    let tabContent = document.getElementsByClassName("HUD__tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    let tabLinks = document.getElementsByClassName("HUD__tab__tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    e.target.className += " active";

    // Get the element with id="defaultOpen" and click on it
    // document.getElementById("defaultOpen").click();
  };

  return (
    <section id='HUD' className='HUD'>
      <div className="HUD__nav">
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
        <h3>Economics</h3>
        <p>First line</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>Dolore adipisicing voluptate excepteur culpa.</p>
        <p>This is the last line</p>
      </div>

      <div id='demographics' className='HUD__tabcontent'>
        <h3>Demographics</h3>
        <p>First line.</p>
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