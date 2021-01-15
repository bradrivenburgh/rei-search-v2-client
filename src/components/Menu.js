import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({
  menuState: {
    menuState: { menuOffset, menuVisibility },
    setMenuState,
    handleRemoveAboutVisited,
  },
}) {
  const handleMenuClose = (e) => {
    if (
      e.target.tagName.toLowerCase() === "a" ||
      e.target.tagName.toLowerCase() === "button"
    ) {
      setMenuState({
        menuOffset: "-250px",
        menuVisibility: "hidden",
      });
    }
  };

  return (
    <>
      <div
        className='menu'
        onClick={(e) => handleMenuClose(e)}
        style={{ right: menuOffset, visibility: menuVisibility }}>
        <button className='menu__closebtn' tabIndex='8'>
          ☰
        </button>
        <Link to='/' onClick={() => handleRemoveAboutVisited()}>
          About
        </Link>
        <Link to='/saved-properties'>Saved properties</Link> 
      </div>
    </>
  );
}


Menu.defaultProps = {
  menuState: {
    menuState: {
      menuOffset: "0px",
      menuVisibility: "visible",
    },
    setMenuState: () => {},
    handleAddAboutVisited: () => {},
  },
};

Menu.propTypes = {
  menuState: PropTypes.shape({
    menuState: PropTypes.shape({
      menuOffset: PropTypes.string.isRequired,
      menuVisibility: PropTypes.string.isRequired
    })
  })
}

export default Menu;