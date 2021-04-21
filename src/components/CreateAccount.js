import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import AuthApiService from "../services/auth-api-service";
import "./CreateAccount.css";

function CreateAccount({ props: setLoggedIn }) {
  const [formData, setFormData] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    password: "",
    verify_password: "",
  });

  const [registrationError, setRegistrationError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, user_name, password } = formData;
    setRegistrationError(null);
    AuthApiService.postUser({
      user_name,
      password,
      first_name,
      last_name,
    })
      .then((user) => {
        // If account creation successful, login
        AuthApiService.postLogin({
          user_name,
          password,
        }).then((res) => {
          setLoggedIn(true);
        });

        setFormData({
          user_name: "",
          first_name: "",
          last_name: "",
          password: "",
          verify_password: "",
        });

        history.push("/");
      })
      .catch((response) => {
        setRegistrationError(response.error);
      });
  };

  const validatePassword = () => {
    const { password, verify_password } = formData;
    let match = true;
    if (password.length > 0 && verify_password.length > 0) {
      match = password === verify_password;
    }
    return match;
  };

  const allFormValuesPresent = () => {
    const areEmptyInputs = Object.values(formData).some(
      (value) => value.trim().length === 0
    );
    let valid = !areEmptyInputs && validatePassword() ? false : true;
    return valid;
  };

  return (
    <>
      <header>
        <h1>Sign-up</h1>
      </header>
      <section className='create-account'>
        <form
          action='#'
          className='create-account__form'
          onSubmit={(e) => handleSubmit(e)}>
          {registrationError && (
            <p style={{ color: "red", maxWidth: "160px" }}>
              {registrationError}
            </p>
          )}
          {validatePassword() ? null : (
            <p style={{ color: "red", maxWidth: "160px" }}>
              Your passwords do not match
            </p>
          )}

          <label htmlFor='user_name'>User Name:</label>
          <input
            type='text'
            id='user_name'
            name='user_name'
            value={formData.user_name}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='first_name'>First Name:</label>
          <input
            type='text'
            id='first_name'
            name='first_name'
            value={formData.first_name}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='last_name'>Last Name:</label>
          <input
            type='text'
            id='last_name'
            name='last_name'
            value={formData.last_name}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='verify_password'>Repeat Password:</label>
          <input
            type='password'
            id='verify_password'
            name='verify_password'
            value={formData.verify_password}
            onChange={(e) => handleChange(e)}
          />

          <div className='create-account__buttons'>
            <button type='button' onClick={() => history.goBack()}>
              Cancel
            </button>
            <button
              className={allFormValuesPresent() ? "disabled-button" : ""}
              disabled={allFormValuesPresent()}
              aria-disabled={allFormValuesPresent()}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

CreateAccount.defaultProps = {
  setLoggedIn: () => {},
};

CreateAccount.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default CreateAccount;
