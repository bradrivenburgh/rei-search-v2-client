import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ChangePassword.css';

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "currentPassword",
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
    history.push('/main');
  }

  const allFormValuesPresent = () => {
    const areEmptyInputs = Object.values(formData).some(
      (value) => value.trim().length === 0
    );
    return areEmptyInputs;
  };

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
          type='password'
          id='currentPassword'
          name='currentPassword'
          value={formData.currentPassword}
          readOnly
        />

        <label htmlFor='newPassword'>New Password:</label>
        <input
          type='password'
          id='newPassword'
          name='newPassword'
          value={formData.newPassword}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor='confirmPassword'>Confirm password:</label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
        />

        <div className='change-password__buttons'>
          <button type='button' onClick={() => history.goBack()}>
            Cancel
          </button>
          <button
            disabled={allFormValuesPresent()}
            aria-disabled={allFormValuesPresent()}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ChangePassword;