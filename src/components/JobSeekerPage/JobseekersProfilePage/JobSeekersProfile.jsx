import React from 'react';
import profile from "../../../Assests/carousel-1.jpg"
import JobSeekerProfileNavbar from './JobseekerProfileNavbar';
import Footer from '../../Footer/Footer';
import "./profile.css"



const JobSeekersProfile = () => {
    return (
        <React.Fragment>
        <JobSeekerProfileNavbar/>
        <div className="container">


         {/* User Main-Profile */}
        <section className="userProfile card">
            <div className="profile">
                <figure><img src={profile} alt="profile" style={{ width: "240px", height: "240px" }}/></figure>
            </div>
        </section>


        {/* <!-- ===== ===== Work & Skills Section ===== ===== --> */}
        <section className="work_skills card">

            {/* Work Contaienr  */}
            <div className="work">
                <h1 className="heading">work</h1>
                <div className="primary">
                    <h1>Spotify Cameroon</h1>
                    <span>Primary</span>
                    <p>Simbock Street <br/> Center region, CR 10038-212-315-51</p>
                </div>

                <div className="secondary">
                    <h1>Metropolitan <br/> Museum</h1>
                    <span>Secondary</span>
                    <p>S34 E 65th Street <br/> Center region, CR 10651-78 156-187-60</p>
                </div>
            </div>

            {/* Skills Contaienr  */}
            <div className="skills">
                <h1 className="heading">Skills</h1>
                
                <ul>
                <li style={{'--i': 0}}>House Help</li>
                <li style={{'--i': 1}}>Nanny</li>
                <li style={{'--i': 2}}>Cooking Service</li>
                <li style={{'--i': 3}}>Elderly Service</li>
                </ul>
                
            </div>
        </section>


         {/* User Details Sections  */}
        <section className="userDetails card">
            <div className="userName">
                <h1 className="name">Leinyuy Rose</h1>
                <div className="map">
                    <i className="ri-map-pin-fill ri"></i>
                    <span>Center Region, CR</span>
                </div>
                <p>General Services</p>
            </div>

            <div className="rank">
                <h1 className="heading">Rankings</h1>
                <span>8,6</span>
                <div className="rating">
                    <i className="ri-star-fill rate"></i>
                    <i className="ri-star-fill rate"></i>
                    <i className="ri-star-fill rate"></i>
                    <i className="ri-star-fill rate"></i>
                    <i className="ri-star-fill rate underrate"></i>
                </div>
            </div>

            <div className="btns">
                <ul>
                    <li className="sendMsg">
                        <i className="ri-chat-4-fill ri"></i>
                        <a href="#">Send Message</a>
                    </li>

                    <li className="sendMsg active">
                        <i className="ri-check-fill ri"></i>
                        <a href="#">Contacts</a>
                    </li>

                    <li className="sendMsg">
                        <a href="#">Report User</a>
                    </li>
                </ul>
            </div>
        </section>


        {/* Timeline & About Sections */}
        <section className="timeline_about card">
            <div className="tabs">
                <ul>
                    <li className="timeline">
                        <i className="ri-eye-fill ri"></i>
                        <span>Timeline</span>
                    </li>

                    <li className="about active">
                        <i className="ri-user-3-fill ri"></i>
                        <span>About</span>
                    </li>
                </ul>
            </div>

            <div className="contact_Info">
                <h1 className="heading">Contact Information</h1>
                <ul>
                    <li className="phone">
                        <h1 className="label">Phone:</h1>
                        <span className="info">+237 674 567 890</span>
                    </li>

                    <li className="address">
                        <h1 className="label">Address:</h1>
                        <span className="info">S34 E 65th Street <br/> Center Region, CR 10651-78 156-187-60</span>
                    </li>

                    <li className="email">
                        <h1 className="label">E-mail:</h1>
                        <span className="info">hello@rsmarqrose.com</span>
                    </li>

                    <li className="site">
                        <h1 className="label">Site:</h1>
                        <span className="info">www.rsmarqrose.com</span>
                    </li>
                </ul>
            </div>

            <div className="basic_info">
                <h1 className="heading">Basic Information</h1>
                <ul>
                    <li className="birthday">
                        <h1 className="label">Birthday:</h1>
                        <span className="info">Dec 25, 2000</span>
                    </li>

                    <li className="sex">
                        <h1 className="label">Gender:</h1>
                        <span className="info">Female</span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <Footer/>
    </React.Fragment>
      );
}
 


export default JobSeekersProfile;