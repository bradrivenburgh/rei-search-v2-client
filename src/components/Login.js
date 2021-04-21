import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import AuthApiService from "../services/auth-api-service";
import "./Login.css";

function Login({ props: setLoggedIn }) {
  const [loginError, setLoginError] = useState(null);
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const allFormValuesPresent = () => {
    const areEmptyInputs = Object.values(formData).some(
      (value) => value.trim().length === 0
    );
    return areEmptyInputs;
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError(null);
    const { user_name, password } = formData;

    AuthApiService.postLogin({
      user_name,
      password,
    })
      .then((response) => {
        setFormData({
          user_name: "",
          password: "",
        });
        setLoggedIn(true);
        history.push("/summary");
      })
      .catch((response) => {
        setLoginError(response.error);
      });
  };

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>
      <section className='login'>
        <form
          action='#'
          className='login__form'
          onSubmit={(e) => handleSubmit(e)}>
          {loginError && (
            <p style={{ color: "red", maxWidth: "160px" }}>{loginError}</p>
          )}

          <label htmlFor='user_name'>User Name:</label>
          <input
            type='text'
            id='user_name'
            name='user_name'
            value={formData.user_name}
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

          <div className='login__buttons'>
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

Login.defaultProps = {
  setLoggedIn: () => {},
};

Login.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Login;
