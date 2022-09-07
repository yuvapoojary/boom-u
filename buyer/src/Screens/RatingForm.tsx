import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../Providers/AuthProvider";
export default function RatingForm(){
  const navigate = useNavigate();
  const params = useParams();
  const sellerID = params.sellerId
  const auth = useAuth();
   const buyerId = auth.user._id;
    const [feedback, setFeedback] = useState("");
  
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");

  


  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
          seller: sellerID,
        
          buyer: buyerId,
         
          feedback: feedback,
          type: type,
          rate: rate

   
      });

      console.log(data)
      var config = {
        method: 'post',
        url: `/rate/`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  if(response.status===200){
      alert('Ratings has been given');
      navigate(`/buyer`);
      
  }
 
})
.catch(function (error) {
  alert('Error in giving rating')
});
      
  }

    return(<><div id="content-wrapper">
    <div className="container-fluid upload-details">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-title">
            <h6>Give Rating to the recommender</h6>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label className="control-label">
                 Feedback <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="Enter your feedback"
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
          </div>
       
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Select Rating <span className="required">*</span>
              </label>
              <select
                className="form-control border-form-control "
                defaultValue=""
                placeholder=""
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              >
                <option value={1}  >Below Average</option>
                <option value={2}>Average</option>
                <option value={3}>Good</option>
                <option value={4}>Very Good</option>
                <option value={5}>Excellent</option>

                </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Selected Type
                <span className="required">*</span>
              </label>
              <select
                className="form-control border-form-control "
               name={type}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value={"Suggestion"} >Suggestion</option>
                <option value={"something_wrong"}>Something is Wrong</option>
                <option value={"compliment"}>Complaint</option>
                
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