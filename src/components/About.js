import React from "react";
import PropTypes from 'prop-types';
import {ReactComponent as Logo} from '../images/reisearch-icon-large.svg';
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
        <nav className='closing-nav'>
          <button onClick={() => handleAddAboutVisited()}>X</button>
        </nav>
        <header>
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
            able to view properties for sale and catalogue them for later
            viewing.
          </p>
        </div>

        <div>
          <h4>Get marketplace statistics</h4>
          <p>
            The app produces statistical data on three geographic
            levels:
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
            <strong>County:</strong> a moderately-sized geography
              that will provide context for the granular census tract data.
            </li>
            <br />
            <li>
              <strong>Census Tracts:</strong> a CT is a small geographic unit
              used for statistical purposes by the US Census Bureau. CT data can
              provide investors with insights into the desirability of a neighborhood.
            </li>
          </ul>

          <p>
            [images from app showing the dashboard with Economy and Demographics
            tabs selected]
          </p>
          <div className='about__flex-container'>
            <img
              src='https://dummyimage.com/200x350/ddd.png?text=Economics%20Tab'
              alt='screenshot of econ tab selected in dashboard'
            />
            <img
              src='https://dummyimage.com/200x350/ddd.png?text=Demographics%20Tab'
              alt='screenshot of demo tab selected in dashboard'
            />
          </div>
        </div>

        <div>
          <h4>Find your next rental property</h4>
          <p>
            Each search will produce a list of properties for sale within ten kilometers
            of a location. You have the option to save properties for later viewing.
          </p>

          <p>
            [images from app showing list of properties and markers on map;
            individual property profile]
          </p>
          <div className='about__flex-container'>
            <img
              src='https://dummyimage.com/200x350/ddd.png?text=Properties%20Tab%20%2F%20Map'
              alt='screenshot of properties tab and map with icons'
            />
            <img
              src='https://dummyimage.com/200x350/ddd.png?text=Property%20Profile'
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
              this page
            </li>
            <li>
              Use the search bar to search for a location in the Philadelphia region.  You may
              search using an address or just a city and state.
            </li>
            <li>
              View statistics (economic and demographic data) and a list of properties using the tabs
              of the head-up-display (HUD) at the bottom of the app. 
            </li>
            <li>
              Navigate to any property on the map by pressing the location button that accompany each property.
              Clicking on the address in the popup marker for each property will navigate to that property in the
              HUD properties tab.
            </li>
            <l>
              View a description and photos of each property by clicking on its photo in the Hud properties tab.
            </l>
            <li>
              Save properties for later viewing by selecting the heart icon that accompany each property.
              Saved properties may be accessed by navigating to them using the menu in the top-right corner
              of the app.
            </li>
          </ol>
        </div>
        <div>
          <h3>Attributions</h3>
          <p>All icons used in this app were created and used with permission by artists from 
             <a href="https://thenounproject.com/" target="_new">The Noun Project</a>.
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
