import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/main");
  };

  const allFormValuesPresent = () => {
    const areEmptyInputs = Object.values(formData).some(
      (value) => value.trim().length === 0
    );
    return areEmptyInputs;
  };

  return (
    <section className='create-account'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>
      <header>
        <h1>Create an account</h1>
      </header>

      <form action='#' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
          value={formData.emailName}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='text'
          id='password'
          name='password'
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor='repeatPassword'>Repeat Password:</label>
        <input
          type='text'
          id='repeatPassword'
          name='repeatPassword'
          value={formData.repeatPassword}
          onChange={(e) => handleChange(e)}
        />

        <div className='create-account__buttons'>
          <button type='button' onClick={() => history.push("/")}>
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

export default CreateAccount;
