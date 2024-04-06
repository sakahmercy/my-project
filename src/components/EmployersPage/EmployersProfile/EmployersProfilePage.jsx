import React from 'react';
import "./employer-profile.css";
import Footer from '../../Footer/Footer';
import profile1 from "../../../Assests/testimonial-4.jpg"
import EmployerProfileNavBar from '../EmployersProfileNav/EmployersProfileNav';


const EmployersProfilePage = () => {
   // console.log("Rendering EmployersProfilePage");
    return ( 
        <React.Fragment>
      < EmployerProfileNavBar/>
      <div className="container" style={{margin_left:"30px" }}>
<div className='d-flex' >


        {/* User Main-Profile */}
        <section className="userProfile card" style={{ width: "60vh",max_height: "240vh" }}>
          <div className="profile">
            <figure><img src={profile1} alt="profile" style={{ width: "200px",height: "200px" }} /></figure>
          </div>
        

        {/* Work & Skills Section */}
        

          {/* Work Container */}
          <div className="work">
            <h4 className="heading">Company Details</h4>
            <div className="primary">
              <h5>Abi's Home Solutions</h5>
              <span>Primary</span>
              <p>123 Main Street <br /> City, State 10038-212-315-51</p>
            </div>

            <div className="Primary">
              <h5>House of BKN</h5>
              <span>Primary</span>
              <p>456 Abi's Avenue <br /> City, State 10651-78 156-187-60</p>
            </div>
          </div>

          {/* Skills Container */}
          <div className="skills">
            <h4 className="heading" >Specializations</h4>
            <ul>
              <li style={{ '--i': 0 }}>Hosue Cleaning</li>
              <li style={{ '--i': 1 }}>Nanny</li>
              <li style={{ '--i': 2 }}>Cooker</li>
              <li style={{ '--i': 3 }}>Elderly Care</li>
            </ul>
          </div>
        </section>

        {/* User Details Sections */}
        <section className="userDetails card" style={{ width: "200vh",max_height: "240vh",margin_right:"opx" }}>
          

          <div className="rank">
          <div className="userName d-flex" style={{ gap:"3em"}} >
            <div>
            <h3 className="name">Abigail Kimbi</h3>
           Home Services
            </div>
            
            <div className="map">
              <i className="ri-map-pin-fill ri"></i>
              <span>City, State</span>
            </div>
            
          </div>
            <h4 className="heading">Rankings</h4>
            <span>8.6</span>
            <div className="rating">
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate underrate"></i>
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
          <section className="timeline_about card">
          <div className="tabs">
            <ul>
              <li className="timeline">
                <i className="ri-eye-fill ri"></i>
                <span>Timeline</span>
              </li>

              <li className="about ">
                <i className="ri-user-3-fill ri"></i>
                <span>About</span>
              </li>
            </ul>
          </div>

          <div className="cotact_Info p-3">
            <h4 className="heading">Contact Information</h4>
            <ul>
              <li className="phone">
                <h5 className="label" >Phone:</h5>
                <span className="info">+1 234 567 890</span><br/>
              
              
                <h5 className="label">Address:</h5>
                <span className="info">789 Tech Lane <br/>City, State 10651-78 156-187-60</span><br/>
              

           
                <h5 className="label">E-mail:</h5>
                <span className="info">info@company.com</span><br/>
              

              
                <h5 className="label">Website:</h5>
                <span className="info">www.company.com</span><br/>
              </li>
            </ul>
          </div>

          <div className="basc_info p-3">
            <h4 className="heading">Basic Information</h4>
            <ul>
              <li className="founded">
                <h5 className="label">Founded:</h5>
                <span className="info">2005</span>
          
                <h5 className="label">Industry:</h5>
                <span className="info">Domestic works</span>
              </li>
            </ul>
          </div>
        </section>
          </div>

        </section>
        </div>

        {/* Timeline & About Sections */}
        
      </div>
      <Footer />
    </React.Fragment>
     );
}
 
export default EmployersProfilePage;