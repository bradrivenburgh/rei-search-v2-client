import React from 'react';
import { useHistory } from 'react-router-dom';
import './DeleteAccount.css';

function DeleteAccount() {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/');
  }

  return (
    <section className='delete-account'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>
      <header>
        <h1>Delete your account</h1>
      </header>

      <div>
        <p>
          This is irreversible. After confirming, all data associated with your
          account will be deleted and you will be instantly signed out of your
          account.
        </p>
      </div>

      <div className='delete-account__buttons'>
        <button type='button' onClick={() => history.goBack()}>
          Cancel
        </button>
        
        <button type='submit' onClick={(e) => handleSubmit(e)}>
          Delete account
        </button>
      </div>
    </section>
  );
}

export default DeleteAccount;