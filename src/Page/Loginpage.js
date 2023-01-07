import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import React, { useState, Fragment } from "react";

import "./loginpage.css";

const LoginPage = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (username === "" || password === "") {
    //   setErrorMessage("Username and password are required");
    // }
    console.log(typeof password);
    if (!(username === "b" && password === "1")) {
      setErrorMessage("incorrect password");
    } else {
      // perform authentication here

      navigate("./dashboard");

      // setErrorMessage("");
    }
  };
  return (
    <Fragment>
      <div className="main-body-div">
        <div className="first-divs">
          <h2>Admin</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <button type="submit">Login</button>
          </form>
        </div>

        <div className="second-div">
          <div className="header-div">
            <h1>Welcome</h1>
          </div>
          <div className="contentarea">
            <hr></hr>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
