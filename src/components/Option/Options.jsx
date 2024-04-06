import React from 'react';
import logo from"../../Assests/career_facet_logo.png"
import "./option.css"
import { Link } from 'react-router-dom';



const OptionPage = () => {
    return ( 
        <div className="Container" >
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form className="border custom-form-content" id='options'>
            <div className="text-center"  >
              <img
                className="option image-fluid"
                src={logo}
                alt="Logo"
                width="250"
                height="100"
              />
              <h1>Welcome</h1>
              <h5>Ready for the next step</h5>
              <h6>Create an account for tools to help you</h6>

            <Link to ="/jobseekersignupform">
            <button className='opt'>Job Seeker</button>
            </Link>  
              <br />
              <Link to="/employersignupform">
              <button className='opt'>Employer</button>
              </Link>
            </div>
            </form>
            </div>
            </div>
            </div>
     );
}
 
export default OptionPage;