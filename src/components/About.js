import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../images/reisearch-icon-large.svg";
import econStatsImage from "../images/econ-stats.png";
import propertiesImage from "../images/properties.png";
import propertyProfileImage from "../images/property-profile.png";
import savedPropsImage from "../images/saved-properties.png";
import "./About.css";

function About({ aboutState: { visited, handleAddAboutVisited } }) {
  return (
    <div
      className='about-wrapper'
      style={visited === "true" ? { display: "none" } : { display: "block" }}>
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
          <p>The app produces statistical data on three geographic levels:</p>

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
              <strong>County:</strong> moderately-sized geographies that provide
              context for more granular census tract data.
            </li>
            <br />
            <li>
              <strong>Census Tracts:</strong> small geographic units used for
              statistical purposes by the US Census Bureau. CT data may provide
              investors with valuable insights into the desirability of a
              neighborhood.
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
            Each search will produce a list of properties for sale within ten
            kilometers of a location. You have the option to save properties for
            later viewing.
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
            <br />
            <img src={savedPropsImage} alt='screenshot of saved properties' />
          </div>
        </div>

        <div>
          <h3>How to get started</h3>
          <p>To get started searching for your next investment property:</p>
          <ol>
            <li>
              <b>Navigate to the main page</b> by clicking the <b>X</b> icon at
              the top of this page.
            </li>
            <li>
              <b>Sign-up</b> for an account or <b>login</b> by accessing the menu 
              ("<b>☰</b>") button in the top-right corner of the page. Or continue as 
              a visitor.
            </li>
            <li>
              Use the input at the top to <b>search for a location</b> in the
              Philadelphia region. You may search using an address or just a
              city and state.
            </li>
            <li>
              <b>View returned statistics and properties</b> using the tabs on
              the expandable
              <b> head-up-display (HUD)</b> positioned at the bottom of the app.
            </li>
            <li>
              <b>Locate properties on the map </b> by pressing the location
              button that accompanies each property in the HUD. Similarly,{" "}
              <b>navigate to properties listed in the HUD</b> by clicking on the
              address appearing in the popups attached to each marker.
            </li>
            <li>
              <b>View photos and a description of each property</b> by clicking
              on its photo in the HUD properties tab.
            </li>
            <li>
              <b>Save properties for later viewing</b> by selecting the heart
              icon that accompanies each property (requires an account). The list 
              of saved properties may be accessed by selecting the "Saved properties" 
              link in the menu.
            </li>
          </ol>
        </div>
        <div>
          <h3>Attributions</h3>
          <p>
            All icons used in this app were created and used with permission by
            artists from
            <a href='https://thenounproject.com/' target='_new'>
              {" "}
              The Noun Project
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

About.defaultProps = {
  aboutState: {
    visited: "false",
    handleAddAboutVisited: () => {},
  },
};

About.propTypes = {
  visited: PropTypes.string,
  handleAddAboutVisited: PropTypes.func,
};

export default About;
