import React from 'react';
import { useHistory } from 'react-router-dom';
import './Account.css';

function Account() {
  let history = useHistory();

  return (
    <section className='account'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>
      <header>
        <h1>My account</h1>
      </header>
      
      <h2>Email</h2>
      
      <div>
        <p>Change the email you use to sign-in.</p>
        <a href="edit-email.html"><button>Edit</button></a>
      </div>
      <hr />
      <h2>Password</h2>
      <div>
        <p>Change your password.</p>
        <a href="change-password.html"><button>Change <br /> Password</button></a>
      </div>
      <hr />
      <h2>Saved properties</h2>
      <div>
        <p>View properties that you have saved to your account.</p>
        <a href="saved-properties-account.html"><button>View</button></a>
      </div>
      <hr />
      <h2>Export data</h2>
      <div>
        <p>Export data saved to your account.</p>
        <a href="export-data.html"><button>Export</button></a>
      </div>
      <hr />      
      <h2>Delete account</h2>
      <div>
        <p>Delete your account.  Please note that this is irreversible.</p>
        <a href="delete-account.html"><button>Delete <br /> Account</button></a>
      </div>
    </section>
  );
}

export default Account;