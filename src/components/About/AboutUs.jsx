import React from 'react';
import about1 from "../../Assests/about-1.jpg"
import about2 from "../../Assests/about-2.png"
import about3 from "../../Assests/about-3.png"
import about4 from "../../Assests/about-4.jpg"
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

const AboutUsPage = () => {
    return (
        <React.Fragment>
        <NavBar/>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="row g-0 about-bg rounded overflow-hidden">
                            <div className="col-6 text-start">
                            <img src={about1} alt="" className="about-1" />
                            </div>
                            <div className="col-5 text-start">
                                <img src={about2} alt="" className="about-2"  style={{ width: '85%', marginTop: '200px', marginLeft: '50%' }} />
                            </div>
                            <div className="col-6 text-end">
                            <img src={about3} alt="" className="about-3" style={{ width: '85%' }} />
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">We Help To Get The Best Job And Find A Talent</h1>
                        <p className="mb-4">Welcome to Career-facet, where we connect skilled and reliable maids and nannies with families seeking quality household support.
                         At Career-facet, we prioritize your peace of mind by carefully vetting our domestic workers and ensuring they possess the necessary skills and dedication.
                          Our platform simplifies the hiring process, making it easy for families to find the perfect match for their unique needs. With a commitment to excellence and personalized service,
                           Career-facet is your trusted partner in creating harmonious homes. Join our community 
                        today and experience the difference of having dependable and caring household assistance.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Mission:
                            To empower households by connecting them with trustworthy and reliable maids and nannies, fostering a safe and supportive environment </p>
                        <p><i className="fa fa-check text-primary me-3"></i>Vision:
                        To be the leading platform reshaping the landscape of informal job connections.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Commitment:
                        We are committed to upholding the highest standards of integrity, reliability, and safety.</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>
    );
}

export default AboutUsPage;