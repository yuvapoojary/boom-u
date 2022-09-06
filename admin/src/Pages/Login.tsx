import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
          email: email,
          password: password,
      });

      console.log(data)

      
      var config = {
        method: 'post',
        url: '/admin/login/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)

      
.then(function (response) {
  
  let dat =response.data;
  
  let access = dat.accessToken;
  if(access !== null){
    localStorage.setItem('access',access);
    navigate("/");
  }
  
})
.catch(function (error) {
  alert('Check Credentials');
});
      
  }
  
    return(<>
    <div className="login-img">
    {/* GLOABAL LOADER */}
   
    <div className="page">
      <div className="">
        {/* CONTAINER OPEN */}
        <div className="col col-login mx-auto mt-5">
          <div className="text-center">
            <img
              src="/assets/images/brand/logo-2.svg"
              className="header-brand-img"
              alt=""
            />
          </div>
        </div>
        <div className="container-login100">
          <div className="wrap-login100 p-6">
            <form className="login100-form validate-form"  onSubmit={handleSubmit}>
              <span className="login100-form-title">Admin Login</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                   type="email"
                   className="form-control"
                   value={email}
                   placeholder="Email Address"
                   required
                   
                   onChange={(e) => setEmail(e.target.value)}
                />
                
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                   type="password"
                   className="form-control"
                   value={password}
                   placeholder="Enter Password"
                   required
                   
                   onChange={(e) => setPassword(e.target.value)}
                />
               
              </div>
             
              <div className="container-login100-form-btn">
              <input type="submit"   className="btn btn-primary" value="Login"/>
        
              </div>
              
              
            </form>
          </div>
        </div>
        {/* CONTAINER CLOSED */}
      </div>
    </div>
  </div>
  </>)
}