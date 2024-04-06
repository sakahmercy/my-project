import React from 'react';
import "./applyform.css"


const JobSeekerApplyForm = () => {
    return ( 
        <div className="container2 mt-5">
        <form className="g-3">
          <div><b>Job Application</b><hr/></div>
          <div className="row">
          <div className="col-md-8">
              <label for="inputEmail4" className="form-label">Name</label>
              <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-3">
              <label for="inputState" className="form-label">Schedule<br/></label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
            </div>
          </div>
           
            <div className="col-12">
              <label for="inputAddress" className="form-label">Experience</label>
             <textarea className="form-control"></textarea>
            </div>
           <div className="col-12">
              <label for="inputAddress" className="form-label">Qualifications</label>
             <textarea className="form-control"></textarea>
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">Locaation</label>
             <textarea className="form-control"></textarea>
            </div>
            <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
  Upload Picture<span style={{ fontSize: "12px", color: "blue" }}>*Optional</span>
</label>

              <input type="file" className="form-control" id="inputEmail4"/>
            </div>
         
            
           
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Apply</button>
            </div>
          </form>
    </div>
     );
}
 
export default JobSeekerApplyForm;