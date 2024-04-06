import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
//import "./profilenav.css";


const EmployerProfileNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Nav.Link
        href="index.html"
        className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
      >
        <h1 className="m-0 text-primary">Career-Facet</h1>
      </Nav.Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Nav.Link href="/" className="nav-item nav-link active">
            Home
          </Nav.Link>
          <Nav.Link href="/about-us">About</Nav.Link>
          <Nav.Link href="/option">Register</Nav.Link>
          <div className="nav-item dropdown">
            <Nav.Link
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Jobs
            </Nav.Link>
            <div class="dropdown-menu rounded-0 m-0">
              <Nav.Link href="/joblists" className="dropdown-item">
                Job List
              </Nav.Link>
              <Nav.Link href="jobdetails" className="dropdown-item">
                Job Detail
              </Nav.Link>
            </div>
          </div>
          <div class="nav-item dropdown">
            <Nav.Link
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Nav.Link>
            <div class="dropdown-menu rounded-0 m-0">
              <Nav.Link href="category.html" className="dropdown-item">
                Job Category
              </Nav.Link>
              <Nav.Link href="testimonial" className="dropdown-item">
                Testimonial
              </Nav.Link>
              <Nav.Link href="404.html" className="dropdown-item">
                404
              </Nav.Link>
            </div>
          </div>
          <Nav.Link href="contact" className="nav-item nav-link">
            Contact
          </Nav.Link>
        </div>
        <Nav.Link
          href="/jobform"
          className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >
          Post Job<i className="fa fa-arrow-right ms-3"></i>
        </Nav.Link>
      </div>
    </nav>
  );
};

export default EmployerProfileNavBar;
