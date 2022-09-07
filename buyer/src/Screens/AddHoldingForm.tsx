

import  { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function AddHoldingForm(){
    const params = useParams()

    const portfolioId = params.portfolioId;
    const navigate = useNavigate();
    const [type, setType] = useState("");
  
  const [transactionDate, setTransactionDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");


  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
        type: type,
          portfolio: params.portfolioId,
          transactionDate: transactionDate,
          quantity: parseInt(quantity),
          price: parseInt(price)

   
      });

      console.log(data)
      var config = {
        method: 'post',
        url: '/holding/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  if(response.status===200){
      alert('Holding Added Successfully');
      navigate(`/holdings/${portfolioId}`);
      
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
            <h6>Add Holding </h6>
          </div>
        </div>
      </div>
   
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-sm-12 col-lg-6">
            <div className="form-group">
              <label className="control-label">
                Type <span className="required">*</span>
              </label>
              <select
                
                className="form-control"
                value={type}
               
                required
                onChange={(e) => setType(e.target.value)}
              >
                <option value={"Stock"} >Stock</option>
                <option value={"Crypto Currency"} >Crypto Currency</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="form-group">
              <label className="control-label">
                Transaction Date <span className="required">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                value={transactionDate}
                placeholder="Enter Title"
                required
                onChange={(e) => setTransactionDate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="form-group">
              <label className="control-label">
                Quantitiy <span className="required">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                value={quantity}
                placeholder="Enter Quantity"
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="form-group">
              <label className="control-label">
                Price <span className="required">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                value={price}
                placeholder="Enter Price"
                required
                onChange={(e) => setPrice(e.target.value)}
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