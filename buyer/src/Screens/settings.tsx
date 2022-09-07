import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

import { useAuth } from "../Providers/AuthProvider";
export default function Settings(){
  const navigate = useNavigate();
  const auth = useAuth();
   const buyerId = auth.user._id;
    const [name, setName] = useState(auth.user.Name);
  
  const [email, setEmail] = useState(auth.user.Email);
  const [country, setCountry] = useState(auth.user.Country);
 


  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
          name: name,
        
          email: email,
         
          country: country

   
      });

      console.log(data)
      var config = {
        method: 'put',
        url: `/buyer/${buyerId}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  if(response.status===200){
      alert('Profile has beeen udated');
      navigate(`/buyer/settings`);
      
  }
 
})
.catch(function (error) {
  alert('Error in updating buyer')
});
      
  }

    return(<><div id="content-wrapper">
    <div className="container-fluid upload-details">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-title">
            <h6>Profile Settings</h6>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label className="control-label">
                 Name <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="Gurdeep"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
       
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Email <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="123 456 7890"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Selected Country ({auth.user.Country})
                <span className="required">*</span>
              </label>
              <select
                className="form-control border-form-control "
                defaultValue=""
                placeholder="iamosahan@gmail.com"
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value={"IN"}  >India</option>
                <option value={"UK"}>United Kingdom</option>
                <option value={"US"}>United States of America</option>
                <option value={"HK"}>Hong Kong</option>

                </select>
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