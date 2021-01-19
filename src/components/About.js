import React from "react";
import PropTypes from 'prop-types';
import {ReactComponent as Logo} from '../images/reisearch-icon-large.svg';
import econStatsImage from '../images/econ-stats.png' 
import propertiesImage from '../images/properties.png'
import propertyProfileImage from '../images/property-profile.png'
import "./About.css";

function About({ aboutState: { visited, handleAddAboutVisited } }) {
  return (
    <div
      className='about-wrapper'
      style={
        visited === "true"
          ? { display: "none" }
          : { display: "block" }
      }>
      <section className='about'>
        <header>
          <nav className='closing-nav'>
            <button onClick={() => handleAddAboutVisited()}>X</button>
          </nav>
          <h1>rei-search</h1>
          <Logo />
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
            able to view properties for sale and save them for later viewing.
          </p>
        </div>

        <div>
          <h4>Get marketplace statistics</h4>
          <p>
            The app produces statistical data on three geographic levels:
          </p>

          <ul>
            <li>
              <strong>
                Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan
                Statistical Area:
              </strong>{" "}
              MSAs are large geographic regions centered around areas of high
              population density (i.e., big cities) with integrated economies.
            </li>
            <br />
            <li>
            <strong>County:</strong> moderately-sized geographies
              that provide context for more granular census tract data.
            </li>
            <br />
            <li>
              <strong>Census Tracts:</strong> small geographic units
              used for statistical purposes by the US Census Bureau. CT data may
              provide investors with strong insights into the desirability 
              of a neighborhood.
            </li>
          </ul>

          <div className='about__flex-container'>
            <img
              src={econStatsImage}
              alt='screenshot of econ tab selected in dashboard'
            />
          </div>
        </div>

        <div>
          <h4>Find your next rental property</h4>
          <p>
            Each search will produce a list of properties for sale within ten kilometers
            of a location. You have the option to save properties for later viewing.
          </p>

          <div className='about__flex-container'>
            <img
              src={propertiesImage}
              alt='screenshot of properties tab and map with icons'
            />
            <br />
            <img
              src={propertyProfileImage}
              alt='screenshot of property profile'
            />
          </div>
        </div>

        <div>
          <h3>How to get started</h3>
          <p>To get started searching for your next investment property:</p>
          <ol>
            <li>
              Navigate to the main page by clicking the "X" icon at the top of
              this page.
            </li>
            <li>
              Use the input at the top to search for a location in the Philadelphia region.  
              You may search using an address or just a city and state.
            </li>
            <li>
              View returned statistics and properties using the tabs on the expandable
              head-up-display (HUD) positioned at the bottom of the app. 
            </li>
            <li>
              Navigate to markers representing individual properties on the map by pressing 
              the location button that accompanies each property in the HUD. Similarly, navigate to properties
              listed in the HUD by clicking on the address appearing in the popups attached to each marker. 
            </li>
            <li>
              View photos and a description of each property by clicking on its photo in the HUD properties tab.
            </li>
            <li>
              Save properties for later viewing by selecting the heart icon that accompanies each property.
              The list of saved properties may be accessed by selecting the "Saved properties" link in 
              the menu appearing in the top-right corner of the app.
            </li>
          </ol>
        </div>
        <div>
          <h3>Attributions</h3>
          <p>All icons used in this app were created and used with permission by artists from 
             <a href="https://thenounproject.com/" target="_new"> The Noun Project</a>.
          </p>
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

About.propTypes = {
  visited: PropTypes.string,
  handleAddAboutVisited: PropTypes.func
}

export default About;
