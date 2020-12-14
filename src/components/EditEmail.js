import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./EditEmail.css";

function EditEmail() {
  const [formData, setFormData] = useState({
    newEmail: "",
    confirmEmail: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const allFormValuesPresent = () => {
    const areEmptyInputs = Object.values(formData).some(
      (value) => value.trim().length === 0
    );
    return areEmptyInputs;
  };


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
        <label htmlFor='newEmail'>Email:</label>
        <input
          type='text'
          id='newEmail'
          name='newEmail'
          value={formData.newEmail}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor='confirmEmail'>Confirm new email:</label>
        <input
          type='text'
          id='confirmEmail'
          name='confirmEmail'
          value={formData.confirmEmail}
          onChange={(e) => handleChange(e)}
        />

        <div className='edit-email__buttons'>
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

export default EditEmail;
