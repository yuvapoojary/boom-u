
import  { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
export default function AddPortfolioForm(){
    const auth = useAuth();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
  
  const [description, setDescription] = useState("");



  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
          title: title,
          description: description,
          buyer: auth.user._id

   
      });

      console.log(data)
      var config = {
        method: 'post',
        url: '/portfolio/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  if(response.status===200){
      alert('Portfolio Added Successfully');
      navigate("/buyer/portfolio");
      
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
            <h6>Add Portfolio </h6>
          </div>
        </div>
      </div>
   
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <div className="form-group">
              <label className="control-label">
                Title <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={title}
                placeholder="Enter Title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
       
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <div className="form-group">
              <label className="control-label">
                Description <span className="required">*</span>
              </label>
              <textarea
               
                
                placeholder="Enter Description"
                
                className="form-control"
                value={description}
             
                required
                onChange={(e) => setDescription(e.target.value)}
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