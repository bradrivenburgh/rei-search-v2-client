import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import { ReactComponent as Logo } from "../images/reisearch-icon-small.svg";

import "./Nav.css";

function Nav({ menuState: { setMenuState } }) {
  return (
    <nav className='nav'>
      <div style={{ marginLeft: 10, marginTop: 3 }}>
        <Logo title='rei-search logo' />
      </div>
      <Search />
      <button
        className='menu-button'
        tabIndex='7'
        onClick={() => {
          setMenuState({
            menuOffset: "0px",
            menuVisibility: "visible",
          });
        }}>
        ☰
      </button>
    </nav>
  );
}

Nav.defaultProps = {
  menuState: {
    setMenuState: () => {},
  },
};

Nav.propTypes = {
  menuState: PropTypes.shape({
    setMenuState: PropTypes.func.isRequired,
  }),
};

export default Nav;
