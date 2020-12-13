import React from 'react';
import { useHistory } from 'react-router-dom';
import './ChangePassword.css';

function ChangePassword() {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.goBack();
  }

  return (
    <section className='change-password'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>
      <header>
        <h1>Change password</h1>
      </header>

      <form action='#' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='current-password'>Current password:</label>
        <input type='text' id='current-password' name='current-password' />

        <label htmlFor='new-password'>New Password:</label>
        <input type='text' id='new-password' name='new-password' />

        <label htmlFor='confirm-password'>Confirm password:</label>
        <input type='text' id='confirm-password' name='confirm-password' />

        <div className='change-password__buttons'>
          <button type="button" onClick={() => history.goBack()}>
              Cancel
          </button>
          <button>
              Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ChangePassword;