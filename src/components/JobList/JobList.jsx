import React ,{ useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import com1 from "../../Assests/com-logo-1.png"
import axios from "axios"

import image1 from "../../Assests/carousel-1.jpg"
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';


const JobList = () => {
  const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/job/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    return ( 
        <React.Fragment>
       <NavBar/>
    <div class="container-xxl py-5">
      <div class="container">
      <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" />
                <Carousel.Caption>
                  <h1>Find The Perfect Job That You Deserved</h1>
                  <p>
                  Authentic and meaningful connections in the realm of domestic service. 
                  Providing support and opportunities for maids and nannies to thrive in their roles.
                  </p>
                  <Link id="sjob" className="primary">Search A Job</Link>
                  <Link id="ftalent"className="secondary">Find A Talent</Link>
                </Carousel.Caption>
              </Carousel.Item>
        <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          Job Listing
        </h1>
        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
          <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li class="nav-item">
              <a
                class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <h6 class="mt-n1 mb-0">Featured</h6>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="d-flex align-items-center text-start mx-3 pb-3"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <h6 class="mt-n1 mb-0">Full Time</h6>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="d-flex align-items-center text-start mx-3 me-0 pb-3"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <h6 class="mt-n1 mb-0">Part Time</h6>
              </a>
            </li>
            /
          </ul>
          <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
              <div class="job-item p-4 mb-4">
              {users.map((user, key) =>
                <div key={key}  class="row mb-5 g-4">
                  <div class="col-sm-12 col-md-8 d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid border rounded"
                      src={com1}
                      alt=""
                      style={{ width: "80px", height: "80px" }}
                    />

                    <div class="text-start ps-4">
                      <h5 class="mb-3 mx-2">{user.Title}</h5>
                      <span class="text-truncate me-3 m-2">
                        <i class="fa fa-map-marker-alt text-primary me-2"></i>
                        {user.Requirements}
                      </span>
                     
                      <span class="text-truncate me-0">
                        <i class="far fa-money-bill-alt text-primary me-2"></i>
                        {user.Salary}
                      </span>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div class="d-flex mb-3">
                      <a class="btn btn-light btn-square me-3" href="">
                        <i class="far fa-heart text-primary"></i>
                      </a>
                      <a class="btn btn-primary" href="/applyform">
                        Apply Now
                      </a>
                    </div>
                    <small class="text-truncate">
                      <i class="far fa-calendar-alt text-primary me-2"></i>Date
                      Line: {user.Application_deadline}
                    </small>
                  </div>
                </div>
                )}
              </div>
           
              
              <a class="btn btn-primary py-3 px-5" href="">
                Browse More Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </React.Fragment>

     );
}
 
export default JobList;