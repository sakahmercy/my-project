import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  return (
    <div className="Container login-bg">
    <div className=" row">
      <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
        <form className="border custom-form-content">
          <div className="text-center">
            <img
              className="signuplogo image-fluid"
              //src={logo}
              alt="Logo"
              width="250"
              height="100"
            />
          </div>
          <h2 class="text-center mb-4">Login</h2>
          <div class="form-group">
            <label for="email">
              <span className="font-weight-bold-sign-up">Email</span>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="form-group">
            <label for="password">
              <span className="font-weight-bold-sign-up">Password</span>
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        <Link to = '/'>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        </Link>
        <Link to = '/signup'>
          <button className="signUpButton">Create an account</button>
        </Link>
      </form>
      </div>
    </div>
  </div>
  );
};



export default Login;
