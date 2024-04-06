import React, { useState } from 'react';
import bootstrap from "react-bootstrap"
import "./jobform.css"
import axios from "axios";

import { useNavigate } from "react-router-dom";


const PostJobForm = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (event) => {
      event.preventDefault();

      axios.post('http://localhost:80/api/job/', inputs).then(function(response){
          console.log(response.data);
         navigate('/joblists');
      });
      
  }
    return ( 
    <div class="container1 mt-5">
        <form class="g-3" onSubmit={handleSubmit}>
          <div><b>Create A Job</b><hr/></div>
          <div className="row">
          <div className="col-md-8">
              <label for="inputEmail4" className="form-label">Title</label>
              <input type="text" name="title" onChange={handleChange} className="form-control" id="inputEmail4"/>
            </div>
            
          </div>
            <div class="col-12">
              <label for="inputAddress"  class="form-label">Description</label>
             <textarea onChange={handleChange} name="description" class="form-control"></textarea>
            </div>
           <div class="col-12">
              <label for="inputAddress"  class="form-label">Requirements</label>
             <textarea name="requirement" onChange={handleChange} class="form-control"></textarea>
            </div>
            <div class="col-12">
                <label for="inputAddress"  class="form-label">Salary</label>
               <textarea onChange={handleChange} name="salary" class="form-control"></textarea>
              </div>
            <div class="col-md-12">
              <label for="inputEmail4"  class="form-label">Application Dateline </label>
              <input onChange={handleChange} name="deadline" type="date" class="form-control" id="inputEmail4"/>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Post</button>
            </div>
            </form>
            </div>
     );
}
 
export default PostJobForm;