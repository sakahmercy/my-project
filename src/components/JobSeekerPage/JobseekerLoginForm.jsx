import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../Assests/career_facet_logo.png"
import "./jobseeker.css";

const JobSeekerLoginForm = () => {
  return (
    <div className="Container login-bg">
    <div className=" row">
      <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
        <form className="border custom-form-content5">
          <div className="text-center">
            <img
              className="loginlogo image-fluid"
              src={logo1}
              alt="Logo"
              width="250"
              height="100"
            />
          </div>
          <h2 className="text-center mb-4">Login</h2>
          <div className="form-group">
            <label for="email">
              <span className="font-weight-bold-login">Email</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label for="password">
              <span className="font-weight-bold-login">Password</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        <Link to = '/profile'>
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



export default JobSeekerLoginForm;
