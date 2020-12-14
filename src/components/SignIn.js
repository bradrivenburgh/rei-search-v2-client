import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

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
        <input
          type='text'
          id='email'
          name='email'
          value={formData.email}
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

        <div className='sign-in__buttons'>
          <button type='button' onClick={() => history.push("/")}>
            Cancel
          </button>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default SignIn;
