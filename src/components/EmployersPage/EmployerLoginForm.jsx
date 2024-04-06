import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../Assests/career_facet_logo.png"
import "./loginpage.css";

const EmployerLoginForm = () => {
  return (
    <div className="Container login-bg3">
    <div className=" row">
      <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
        <form className="border custom-form-content3">
          <div className="text-center">
            <img
              className="loginlogo image-fluid"
              src={logo1}
              alt="Logo"
              width="250"
              height="100"
            />
          </div>
          <h2 class="text-center mb-4">Login</h2>
          <div class="form-group">
            <label for="email">
              <span className="font-weight-bold-login3">Email</span>
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
              <span className="font-weight-bold-login3">Password</span>
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        <Link to = '/employer-profile' >
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        </Link>
        <Link to = '/signup'>
          <button className="loginButton">Create an account</button>
        </Link>
      </form>
      </div>
    </div>
  </div>
  );
};



export default EmployerLoginForm;
