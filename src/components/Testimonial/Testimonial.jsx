import React from 'react';
import testimonial1 from "../../Assests/testimonial-1.jpg"
import testimonial2 from "../../Assests/testimonial-2.jpg"
import testimonial3 from "../../Assests/testimonial-3.jpg"
import testimonial4 from "../../Assests/testimonial-4.jpg"
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';


const Testimonial = () => {
    return ( 
        <React.Fragment>
            <NavBar/>
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <h1 class="text-center mb-5">Our Clients Say!!!</h1>
            <div class="owl-carousel testimonial-carousel">
                <div class="testimonial-item bg-light rounded p-4">
                    <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>Persistence and hard work define the essence of maids and nannies. Their dedication and commitment to the job are unwavering, showcasing their enduring 
                        qualities in providing essential services with care and diligence.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonial1} style={{ width: "50px", height: "50px" }}/>
                        <div class="ps-3">
                            <h5 class="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item bg-light rounded p-4">
                    <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>Persistence and hard work define the essence of maids and nannies. Their dedication and commitment to the
                         job are unwavering, showcasing their enduring qualities in providing essential 
                        services with care and diligence.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonial2} style={{ width: "50px", height: "50px" }}/>
                        <div class="ps-3">
                            <h5 class="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item bg-light rounded p-4">
                    <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>Persistence and hard work define the essence of maids and nannies. Their dedication and commitment to the job are unwavering, 
                        showcasing their enduring qualities in providing essential services with care and diligence.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonial3} style={{ width: "50px", height: "50px" }}/>
                        <div class="ps-3">
                            <h5 class="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item bg-light rounded p-4">
                    <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>Persistence and hard work define the essence of maids and nannies. Their dedication and commitment to the job are unwavering,
                         showcasing their enduring qualities in providing essential services with care and diligence.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonial4} style={{ width: "50px", height: "50px" }}/>
                        <div class="ps-3">
                            <h5 class="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </React.Fragment>
     );
}
 
export default Testimonial;