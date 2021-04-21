import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';
import './Menu.css';

function Menu({
  menuState: {
    menuState: { menuOffset, menuVisibility },
    setMenuState,
    loggedIn,
    setLoggedIn,
    handleRemoveAboutVisited,
  },
}) {
  const handleMenuClose = (e) => {
    if (
      e.target.tagName.toLowerCase() === 'a' ||
      e.target.tagName.toLowerCase() === 'button'
    ) {
      setMenuState({
        menuOffset: '-250px',
        menuVisibility: 'hidden',
      });
    }
  };

  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
    setLoggedIn(TokenService.hasAuthToken());
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  const renderLogoutLink = () => {
    return (
      <Link onClick={handleLogoutClick} to='/'>
        Logout
      </Link>
    );
  };

  const renderLoginLink = () => {
    return <Link to='/login'>Login</Link>;
  };

  return (
    <>
      <div
        className='menu'
        onClick={(e) => handleMenuClose(e)}
        style={{ right: menuOffset, visibility: menuVisibility }}>
        <button
          data-testid='menu-close-button'
          className='menu__closebtn'
          tabIndex='8'>
          ☰
        </button>
        <Link to='/' onClick={() => handleRemoveAboutVisited()}>
          About
        </Link>
        <Link to='/saved-properties'>Saved properties</Link>
        {loggedIn ? '' : <Link to='/create-account'>Sign-up</Link>}
        {loggedIn ? renderLogoutLink() : renderLoginLink()}
      </div>
    </>
  );
}

Menu.defaultProps = {
  menuState: {
    menuState: {
      menuOffset: '0px',
      menuVisibility: 'visible',
    },
    loggedIn: false,
    setMenuState: () => {},
    handleAddAboutVisited: () => {},
  },
};

Menu.propTypes = {
  menuState: PropTypes.shape({
    menuState: PropTypes.shape({
      menuOffset: PropTypes.string.isRequired,
      menuVisibility: PropTypes.string.isRequired,
    }),
  }),
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.func,
  setMenuState: PropTypes.func,
  handleAddAboutVisited: PropTypes.func,
};

export default Menu;
