import React from "react";
//import { useHistory } from "react-router-dom";
import "./About.css";

function About({ aboutState: { visited, handleAddAboutVisited } }) {
  return (
    <div
      className='about-wrapper'
      style={
        visited === "false" || visited === null
          ? { display: "block" }
          : { display: "none" }
      }>
      <section className='about'>
        <nav className='closing-nav'>
          <button onClick={() => handleAddAboutVisited()}>X</button>
        </nav>
        <header>
          <img
            src='https://via.placeholder.com/250x125?text=REI-SEARCH LOGO'
            alt='[LOGO]'
          />
          <h1>rei-search</h1>
          <h2>
            Start investing <br /> the right way
          </h2>
        </header>
        <div>
          <h3>About rei-search</h3>
          <p>
            Real estate investment decisions should always begin with proper due
            diligence. This app is meant to be used by investors interested in
            buying rental real estate in and around Philadelphia, PA. Users will
            be able to discover and evaluate key statistics about the population
            and economy of municipalities in this geography. They will also be
            able to view properties for sale and catalogue them for later
            viewing.
          </p>
        </div>

        <div>
          <h4>Get marketplace statistics</h4>
          <p>
            The app produces statistical data primarily on two geographic
            levels:
          </p>

          <ul>
            <li>
              <strong>
                Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan
                Statistical Area:
              </strong>{" "}
              MSAs are geographic regions centered around areas of high
              population density (i.e., big cities) with integrated economies.
              The Philadelphia-Camden-Wilmington, PA-NJ-DE-MD MSA will provide
              investors with useful context when viewing comparable Census Tract
              statistics.
            </li>
            <br />
            <li>
              <strong>Census Tracts:</strong> a CT is a smaller geographic unit
              used for statistical purposes by the US Census Bureau, often
              correlating closely to city town boundaries. The more granular
              focus will provide investors with a better idea of how a
              municipality compares to the MSA as a whole.
            </li>
          </ul>

          <p>
            [images from app showing the dashboard with Economy and Demographics
            tabs selected]
          </p>
          <div className='about__flex-container'>
            <img
              src='https://via.placeholder.com/250x350?text=Economy Tab'
              alt='screenshot of econ tab selected in dashboard'
            />
            <img
              src='https://via.placeholder.com/250x350?text=Demographics Tab'
              alt='screenshot of demo tab selected in dashboard'
            />
          </div>
        </div>

        <div>
          <h4>Find your next rental property</h4>
          <p>
            Each search will produce a list of properties for sale in the
            geography you selected with the option to save them to your account
            for later viewing.
          </p>

          <p>
            [images from app showing list of properties and markers on map;
            individual property profile]
          </p>
          <div className='about__flex-container'>
            <img
              src='https://via.placeholder.com/250x350?text=Property  List / Map'
              alt='screenshot of econ tab selected in dashboard'
            />
            <img
              src='https://via.placeholder.com/250x350?text=Individual Property Profile'
              alt='screenshot of demo tab selected in dashboard'
            />
          </div>
        </div>

        <div>
          <h3>How to get started</h3>
          <p>To get started searching for your next investment property:</p>
          <ol>
            <li>
              Navigate to the main page by clicking the "X" icon at the top of
              this page
            </li>
            <li>
              Create an account to save select properties or proceed as a
              visitor and create an account at another time
            </li>
            <li>
              Select a place in the Philadelphia region and review the data to
              narrow down where you will invest next.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

About.defaultProps = {
  aboutState: { 
    visited: 'false', 
    handleAddAboutVisited: () => {} 
  }
}

export default About;
