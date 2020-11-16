import React, { useState } from "react";
import "./HUD.css";

function HUD() {
  let [pressCount, setPressCount] = useState(0);

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

    // TO DO: Get the element with id="defaultOpen" and click on it
    // Needs to be used in a useEffect()
    //  document.getElementById("defaultOpen").click();
  };

const mockData = [
  {
    "id": 1,
    "statistic": "Price-to-rent ratio",
    "advisory": "(Lower is better)",
    "CT": "18.00",
    "MSA": "18.20",
    "USA": "18.30"
  },
  {
    "id": 2,
    "statistic": "Median income",
    "CT": "$40,000",
    "MSA": "$40,000",
    "USA": "$40,000"
  },
  {
    "id": 3,
    "statistic": "Top three sectors",
    "advisory": "(Ordered by percentage of working population employed)",
    "CT": [
      "Health care and social assistance (19.29%)", 
      "Retail trade (18.29%)", 
      "Accommodation and food services (8.75%)"
    ],
    "MSA": [
      "Health care and social assistance (19.29%)", 
      "Retail trade (18.29%)", 
      "Accommodation and food services (8.75%)"
    ],
    "USA": [
      "Health care and social assistance (19.29%)", 
      "Retail trade (18.29%)", 
      "Accommodation and food services (8.75%)"
    ],
  },
  {
    "id": 4,
    "statistic": "Top three occupations",
    "advisory": "(Ordered by percentage of working population in occupation)",
    "CT": [
      "Health care and social assistance (19.29%)", 
      "Retail trade (18.29%)", 
      "Accommodation and food services (8.75%)"
    ],
    "MSA": [
      "Health care and social assistance (19.29%)", 
      "Retail trade (18.29%)", 
      "Accommodation and food services (8.75%)"
    ],
    "USA": [
      "Health care and social assistance (19.29%)", 
      "Retail trade (18.29%)", 
      "Accommodation and food services (8.75%)"
    ],
  },
];

  const renderTableHeaders = (data) => {
    let keys = Object.keys(data[0]);
    let header = keys.slice(3);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>
    });
  }

  /** TO DO: Examine this function with Robert to figure out why this won't map a
   * list. The current implementation is basically hardcoded! 
  */
  const renderValue = (value) => {
    if (typeof value === 'object') {
      return (
        <ul>
          <li>{value[0]}</li>
          <li>{value[1]}</li>
          <li>{value[2]}</li>
        </ul>
      );
    } else {
      return value;
    }

    // if (typeof value === 'object') {
    //   // let list = value.map((item, index) => <li key={index}>{item}</li>;
    //   return (
    //   <ul>
    //     value.map((item, index) => <li key={index}>{item}</li> 
    //   </ul>    
    //   ); 
    
    // } else {
    //   return value;
    // }

  }

  const renderTable = (data) => {
    return data.map(entry => {
      const { id, statistic, CT, MSA, USA } = entry;
      return (
        <li key={id}>
          <h4>{statistic}</h4>
          {entry.advisory && <p><em>{entry.advisory}</em></p>}
          <table>
            <thead>
              <tr>
                {renderTableHeaders(data)}
              </tr>
            </thead>
            <tbody>          
              <tr>
                <td>{renderValue(CT)}</td>
                <td>{renderValue(MSA)}</td>
                <td>{renderValue(USA)}</td>
              </tr>
            </tbody>    
          </table>
        </li>
      )
    })
  }

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
          <h3>Economy</h3>
          <ul>
            {renderTable(mockData)}
          </ul>
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
