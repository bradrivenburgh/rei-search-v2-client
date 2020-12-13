import React from 'react';
import { useHistory } from 'react-router-dom';
import './EditEmail.css';

function EditEmail() {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/')
  }

  return (
    <section className='edit-email'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>
      <header>
        <h1>Edit email</h1>
      </header>

      <p>
        Your current email is <br />
        <strong>your.email@gmail.com</strong>
      </p>

      <form action='#' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' name='email' />

        <label htmlFor='confirm-email'>Confirm new email:</label>
        <input type='text' id='confirm-email' name='confirm-email' />

        <div className='edit-email__buttons'>
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

export default EditEmail;