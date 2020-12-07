import React from 'react';
import { useHistory } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/')
  }

  return (
    <section className='create-account'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>
      <header>
        <h1>Create an account</h1>
      </header>

      <form action='#' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='first-name'>First Name:</label>
        <input type='text' id='first-name' name='first-name' />

        <label htmlFor='last-name'>Last Name:</label>
        <input type='text' id='last-name' name='last-name' />

        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' name='email' />

        <label htmlFor='password'>Password:</label>
        <input type='text' id='password' name='password' />

        <label htmlFor='verify-password'>Repeat Password:</label>
        <input type='text' id='verify-password' name='verify-password' />

        <div className='create-account__buttons'>
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