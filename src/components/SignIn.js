import React from 'react';
import { useHistory } from 'react-router-dom';
import './SignIn.css';

function CreateAccount() {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/')
  }

  return (
    <section className='sign-in'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>
      <header>
        <h1>Sign-in</h1>
      </header>

      <form action='#' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' name='email' />

        <label htmlFor='password'>Password:</label>
        <input type='text' id='password' name='password' />

        <div className='sign-in__buttons'>
          <button type="button" onClick={() => history.push('/')}>
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

export default CreateAccount;