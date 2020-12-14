import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ValidationError from './ValidationError';
import './ChangePassword.css';

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "*************",
    newPassword: "",
    confirmPassword: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.goBack();
  }

  const validatePassword = () => {
    const name = formData.folderName.trim();
    if (name.length === 0) {
      return 'A folder name is required';
    }
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
        <label htmlFor='currentPassword'>Current password:</label>
        <input
          type='text'
          id='currentPassword'
          name='currentPassword'
          value={formData.currentPassword}
        />

        <label htmlFor='newPassword'>New Password:</label>
        <input
          type='text'
          id='newPassword'
          name='newPassword'
          value={formData.newPassword}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor='confirmPassword'>Confirm password:</label>
        <input
          type='text'
          id='confirmPassword'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
        />

        <div className='change-password__buttons'>
          <button type='button' onClick={() => history.goBack()}>
            Cancel
          </button>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ChangePassword;