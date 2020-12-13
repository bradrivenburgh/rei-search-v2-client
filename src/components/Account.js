import React from 'react';
import { useHistory, Link } from 'react-router-dom';
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
        <Link to='/account/edit-email'><button>Edit</button></Link>
      </div>
      <hr />
      <h2>Password</h2>
      <div>
        <p>Change your password.</p>
        <Link to='/account/change-password'><button>Change <br /> Password</button></Link>
      </div>
      <hr />
      <h2>Saved properties</h2>
      <div>
        <p>View properties that you have saved to your account.</p>
        <Link to='/saved-properties'><button>View</button></Link>
      </div>
      <hr />
      <h2>Export data</h2>
      <div>
        <p>Export data saved to your account.</p>
        <Link to='/account/export-data'><button>Export</button></Link>
      </div>
      <hr />      
      <h2>Delete account</h2>
      <div>
        <p>Delete your account.  Please note that this is irreversible.</p>
        <Link to='/account/delete-account'><button>Delete <br /> Account</button></Link>
      </div>
    </section>
  );
}

export default Account;