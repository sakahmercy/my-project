import React from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../Assests/carousel-1.jpg";
import image2 from "../../Assests/carousel-2.jpg";
import { Link } from "react-router-dom";
import "./homepage.css"


const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />

      <div className="container-fluid p-0">
        <div className="owl-carousel header-carousel position-relative">
          <div className="owl-carousel-item position-relative ">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" style={{ height: "500px" }} />
                <Carousel.Caption>
                  <hr style={{ border: "solid 7px blue",width:"10%" ,transform:"translate(-387px,20px)"}}/>
                  <div className="row justify-content-start "  >
                    <div className="col-10 col-lg-8" style={{ borderLeft: "solid 10px blue", borderImage: "linear-gradiant"  }}>
                  <h1>Find The Perfect Job That You Deserved</h1>
                  <p>
                  Authentic and meaningful connections in the realm of domestic service. 
                  Providing support and opportunities for maids and nannies to thrive in their roles.
                  </p>
                  <Link to="/option" id="sjob" className="primary m-3">Search A Job</Link>
                  <Link to="/option" id="ftalent"className="secondary">Find A Talent</Link>
                    </div>
                  </div>
                  <hr style={{ border: "solid 7px blue",width:"10%" ,transform:"translate(-387px,-20px)"}}/>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image2} alt="First slide" style={{ height: "500px" }} />
                <Carousel.Caption>
                  <hr style={{ border: "solid 7px blue",width:"10%" ,transform:"translate(-387px,20px)"}}/>
                  <div className="row justify-content-start "  >
                    <div className="col-10 col-lg-8" style={{ borderLeft: "solid 10px blue", borderImage: "linear-gradiant"  }}>
                  <h1>Find The Perfect Job That You Deserved</h1>
                  <p>
                  Authentic and meaningful connections in the realm of domestic service. 
                  Providing support and opportunities for maids and nannies to thrive in their roles.
                  
                  </p>
                  <Link to = '/option' id="sjob" className="primary m-3">Employer</Link>
                  <Link to = '/option' id="ftalent"className="secondary">Job Seeker</Link>
                    </div>
                  </div>
                  <hr style={{ border: "solid 7px blue",width:"10%" ,transform:"translate(-387px,-20px)"}}/>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>


      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: "35px" }}
      >
        <div className="container">
  <div className="row g-2">
    <div className="col-md-10">
      <div className="row g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control border-0"
            placeholder="Keyword"
          />
        </div>
        <div className="col-md-4 text-center"> 
          <select className="form-select border-0 form-select-lg w-100">
            <option selected>Category</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </select>
        </div>
        <div className="col-md-4 text-center"> 
          <select className="form-select border-0 form-select-lg w-100">
            <option selected>Location</option>
            <option value="1">Location 1</option>
            <option value="2">Location 2</option>
            <option value="3">Location 3</option>
          </select>
        </div>
      </div>
    </div>
    <div className="col-md-2">
      <button className="btn btn-dark border-0 w-100">Search</button>
    </div>
  </div>
</div>

      </div>


      <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                            <h6 className="mb-3">Housekeeping/Maid Services</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                            <h6 className="mb-3">Child Care/Nanny Services</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                            <h6 className="mb-3">Elderly Care Services</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                            <h6 className="mb-3">Cooking Services</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                            <h6 className="mb-3">General Domestic Services</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                            <h6 className="mb-3">Specialized Services</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-book-reader text-primary mb-4"></i>
                            <h6 className="mb-3">Pet Care Services</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                            <h6 className="mb-3">Design & Creative</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>  
      
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
