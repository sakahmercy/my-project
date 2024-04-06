import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/career_facet_logo.png"
import "./jobseeker.css";

//declare a state variables for each field and their corresponding errors
const JobSeekerSignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] =useState("");

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    gender:'',
    phoneNumber: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {};
  
    
    if (username.trim() === '') {
      newErrors.username = 'Username is required';
    }
  
    if (email.trim() === '') {
      newErrors.email = 'Email is  required';
    }
  
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
    }
    if(gender.trim()===''){
      newErrors.gender = 'gender is required'
    }
  
    if (phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (description.trim()===''){
      newErrors.password = 'description is required';
    }
  
    setErrors(newErrors);
  
    // Proceed with sign-up process if no errors
    if (Object.keys(newErrors).length === 0) {
    }
  };

  return (
    <div className="Container sign-up-bg1">
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form className="border custom-form-content" onSubmit={handleSubmit}>
            <div className="text-center">
              <img
                className="signuplogo image-fluid"
                src={logo}
                alt="Logo"
                width="250"
                height="100"
              />
            </div>
            <h2 className="text-center mb-4">Sign Up</h2>
            <div className="form-group">
              <label htmlFor="username">
                <span className="font-weight-bold-sign-up1">Username</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <span className="font-weight-bold-sign-up">Email</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <span className="font-weight-bold-sign-up">Password</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="username">
                <span className="font-weight-bold-sign-up1">Gender</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="gender"
                placeholder="Enter gender"
                value={username}
                onChange={(e) => setGender(e.target.value)}
              />
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="number">
                <span className="font-weight-bold-sign-up">Phone number</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="number"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="username">
                <span className="font-weight-bold-sign-up1">Training Center</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter description"
                value={username}
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors.description && <span className="error">{errors.description}</span>}
            </div>
            <Link to = "/profile">
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
            </Link>
            <Link to="/login">
              <button className="signUpButton">I have an account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerSignUpForm;