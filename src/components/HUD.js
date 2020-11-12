import React, { useState } from 'react';
import './HUD.css';

function HUD() {
  let [ pressCount, setPressCount ] = useState(0);

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
    let containerHeight, contentHeight;
    if (pressCount === 0) {
      containerHeight = "67%";
    } else if (pressCount === 1) {
      containerHeight = "94%";
    } else if (pressCount === 2) {
      containerHeight = "12%";
    } else {
      containerHeight = "33%";
    }
    document.getElementById("HUD").style.height = `${containerHeight}`;
    
    pressCount <= 2
    ? setPressCount(pressCount + 1)
    : setPressCount(pressCount = 0);

  }


  const openCity = (e, cityName) => {
    let tabContent = document.getElementsByClassName("HUD__tab__tabcontent");
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
  }
  

  return(
    <section id="HUD" className="HUD">
      <button className="HUD__pill-button" onClick={adjustHUDHeight} />
      
      <div className="HUD__tab">
        <button id="defaultOpen" className="HUD__tab__tablinks" onClick={(e) => openCity(e, 'economics')}>economics</button>
        <button className="HUD__tab__tablinks" onClick={(e) => openCity(e, 'demographics')}>demographics</button>
        <button className="HUD__tab__tablinks" onClick={(e) => openCity(e, 'properties')}>properties</button>
      </div>

      <div id="economics" className="HUD__tab__tabcontent">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
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

      <div id="demographics" className="HUD__tab__tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="properties" className="HUD__tab__tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </section>
  );
}

export default HUD;