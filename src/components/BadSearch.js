import React from "react";
import PropTypes from "prop-types";
import "./BadSearch.css";

function BadSearch({ badSearchState: { badSearch, setBadSearch } }) {
  return (
    <div
      className='search-wrapper'
      style={badSearch === false ? { display: "none" } : { display: "block" }}>
      <section className='search'>
        <header>
          <nav className='closing-nav'>
            <button onClick={() => setBadSearch(false)}>X</button>
          </nav>
          <h1>Whoops!</h1>
        </header>
        <div>
          <p>
            The location you entered fell outside the
            Philadelphia-Camden-Wilmington, PA-NJ-DE-MD MSA. We have directed
            your search to Philadelphia, PA, instead. Please try searching for
            another location within the MSA. Thanks!
          </p>
        </div>
      </section>
    </div>
  );
}

BadSearch.defaultProps = {
  badSearchState: {
    badSearch: false,
    setBadSearch: () => {},
  },
};

BadSearch.propTypes = {
  badSearch: PropTypes.bool,
  setBadSearch: PropTypes.func,
};

export default BadSearch;
