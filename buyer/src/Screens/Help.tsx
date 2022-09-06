import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useState } from "react";

import { useAuth } from "../Providers/AuthProvider";

export default function HelpForm(){
    const auth = useAuth();
    
    const [subject, setSubject] = useState("");
  
  const [message, setMessage] = useState("");
 


  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
        subject: subject,
        
          message: message,
         
          requestedBy: auth.user._id

   
      });

      console.log(data)
      var config = {
        method: 'post',
        url: '/help/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  if(response.status===200){
      alert('Your message has been sent, will contact ou soon');
     
      
  }
 
})
.catch(function (error) {
  alert('Error in adding recommender')
});
      
  }

    return(<><div id="content-wrapper">
    <div className="container-fluid upload-details">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-title">
            <h6>Help &amp; Support</h6>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label className="control-label">
               Subject<span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="Enter Subject"
                type="text"
                
                value={subject}
               
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
       
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label className="control-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                className="form-control border-form-control"
                defaultValue=""
                placeholder="Enter message you want convey"
                
                
                value={message}
               
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          
        </div>
       
        
        <div className="row">
          <div className="col-sm-12 text-right">
            
            <button type="submit" className="btn btn-success border-none">
              {" "}
              Save Changes{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
    {/* /.container-fluid */}
    {/* Sticky Footer */}
    
  </div>
  </>)
}