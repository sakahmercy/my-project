import React from 'react';
import com1 from "../../Assests/com-logo-1.png"
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';



const JobDetails = () => {
    return ( 
        <React.Fragment>
            <NavBar/>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gy-5 gx-4">
                <div className="col-lg-8">
                    <div className="d-flex align-items-center mb-5">
                        <img className="flex-shrink-0 img-fluid border rounded" src={com1} alt="" style={{ width: "80px", height: "80px" }}/>
                        <div className="text-start ps-4">
                            <h3 className="mb-3">Maids/Nanny Services</h3>
                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Cameroon</span>
                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>30000 - 150000</span>
                        </div>
                    </div>

                    <div className="mb-5">
                        <h4 className="mb-3">Job description</h4>
                        <p>
                        We are looking for a skilled developer to contribute to the creation of an innovative informal job application system tailored for maids and nannies. The role involves designing and implementing user-friendly features, ensuring data security, and collaborating with stakeholders to meet the unique requirements of the informal job sector. The ideal candidate should have a strong background in web development,
                         proficiency in technologies like React, PHP, and MySQL, and a commitment to delivering a high-quality, responsive platform. Join us in revolutionizing the informal job sector by creating a seamless connection between households and skilled maids/nannies. Apply now to be part of this exciting project!
                        </p>
                        <h4 className="mb-3">Qualifications</h4>
                        <p>Qualifications for maids and nannies in the context of an informal job application system would typically involve a combination of skills, experience, and personal attributes suitable for domestic
                             and childcare responsibilities. The qualifications may include:</p>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Experience and Training</li>
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Reliability and Trustworthiness</li>
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Communication Skills</li>
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Caring and Compassionate Nature</li>
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Legal and Ethical Considerations</li>
                        </ul>
                        <h4 className="mb-3">Responsibility</h4>
                        <p>Responsibilities for maids and nannies within the context of an informal job application system involve a range of duties and tasks related to household management, childcare, 
                            and maintaining a clean and organized living environment. The responsibilities may include:</p>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Housekeeping Duties</li>
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Maintaining Household Supplies</li>
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Emergency Response</li>
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Respect for Privacy</li>
                            <li><i className="fa fa-angle-right text-primary me-2"></i>Professional Conduct:</li>
                        </ul>
                    </div>
    
                    <div className="">
                        <h4 className="mb-4">Apply For The Job</h4>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control" placeholder="Your Name"/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control" placeholder="Your Email"/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control" placeholder="Location"/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="file" className="form-control bg-white"/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" rows="5" placeholder="Job Interest Letter"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100" type="submit">Apply Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    
                <div className="col-lg-4">
                    <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                        <h4 className="mb-4">Job Summery</h4>
                        <p><i className="fa fa-angle-right text-primary me-2"></i>Published On: 01 Jan, 2024</p>
                        <p><i className="fa fa-angle-right text-primary me-2"></i>Vacancy: 237 Position</p>
                        <p><i className="fa fa-angle-right text-primary me-2"></i>Job Nature: Full Time</p>
                        <p><i className="fa fa-angle-right text-primary me-2"></i>Salary: 30000 - 150000</p>
                        <p><i className="fa fa-angle-right text-primary me-2"></i>Location: Cameroon</p>
                        <p className="m-0"><i className="fa fa-angle-right text-primary me-2"></i>Date Line: 01 Jan, 2026</p>
                    </div>
                    <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                        <h4 className="mb-4">Company Detail</h4>
                        <p className="m-0">Our platform is a user-friendly and innovative informal job application 
                        system designed to connect households with skilled and reliable maids and nannies. We strive to simplify the hiring process by providing a 
                        secure and efficient online space for employers and job seekers in the domestic service sector. Our commitment is to facilitate seamless connections, ensuring families find trustworthy domestic help while offering individuals
                         in this profession valuable opportunities. With a focus on simplicity, transparency, and accessibility, our platform is dedicated to enhancing the 
                        way families and domestic service providers connect and build lasting working relationships.</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <Footer/>
    </React.Fragment>
     );
}
 
export default JobDetails;