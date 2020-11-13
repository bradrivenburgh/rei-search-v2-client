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
    // Needs to be used in a useEffect()
    //  document.getElementById("defaultOpen").click();
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
        <h3>Economy</h3>
                <ul>
                  <li>
                    <h4>Price-to-rent ratio</h4>
                    <p><em>(Lower is better)</em></p>
                    <table>
                      <tr>
                        <th>CT</th>
                        <th>MSA</th>
                        <th>USA</th>
                      </tr>
                      <tr>
                        <td>18.84</td>
                        <td>18.00</td>
                        <td>17.00</td>
                      </tr>
                    </table>
                  </li>
                  <li>
                    <h4>Median income</h4>
                    <table>
                      <tr>
                        <th>CT</th>
                        <th>MSA</th>
                        <th>USA</th>
                      </tr>
                      <tr>
                        <td>$39500</td>
                        <td>$40495</td>
                        <td>$39000</td>
                      </tr>
                    </table>
                  </li>
                  <li>
                    <h4>Top three sector</h4>
                    <p><em>(Ordered by percentage of working 
                      population employed)</em></p>
                    <table>
                      <tr>
                        <th>CT</th>
                        <th>MSA</th>
                        <th>USA</th>
                      </tr>
                      <tr>
                        <td>
                          <ul>
                            <li>Health care and social assistance: 19.29%</li>
                            <li>Retail trade: 11.75%</li>
                            <li>Accommodation and food services: 8.57%</li>
                          </ul>      
                        </td>
                        <td>
                          <ul>
                            <li>Health care and social assistance: 19.29%</li>
                            <li>Retail trade: 11.75%</li>
                            <li>Accommodation and food services: 8.57%</li>
                          </ul>      
                        </td>
                        <td>
                          <ul>
                            <li>Health care and social assistance: 19.29%</li>
                            <li>Retail trade: 11.75%</li>
                            <li>Accommodation and food services: 8.57%</li>
                          </ul>      
                        </td>
                      </tr>
                    </table>
                  </li>
                  <li>
                    <h4>Top three occupation types</h4>
                    <p><em>(Ordered by percentage of 
                      working population in occupation)</em></p>
                    <table>
                      <tr>
                        <th>CT</th>
                        <th>MSA</th>
                        <th>USA</th>
                      </tr>
                      <tr>
                        <td>
                          <ul>
                            <li>Management, business, science, 
                              and arts occupations: 43.8%</li>
                            <li>Sales and office occupations: 21.7%</li>
                            <li>Service occupations: 16.9%</li>
                          </ul>      
                        </td>
                        <td>
                          <ul>
                            <li>Management, business, science, 
                              and arts occupations: 43.8%</li>
                            <li>Sales and office occupations: 21.7%</li>
                            <li>Service occupations: 16.9%</li>
                          </ul>      
                        </td>
                        <td>
                          <ul>
                            <li>Management, business, science, 
                              and arts occupations: 43.8%</li>
                            <li>Sales and office occupations: 21.7%</li>
                            <li>Service occupations: 16.9%</li>
                          </ul>      
                        </td>
                      </tr>
                    </table>
                  </li>
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
