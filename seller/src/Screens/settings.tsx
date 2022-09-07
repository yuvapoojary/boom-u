import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

import { useAuth } from "../Providers/AuthProvider";
export default function Settings(){
  const navigate = useNavigate();
  const auth = useAuth();
   const sellerId = auth.user._id;
    const [name, setName] = useState(auth.user.Name);
  
  const [email, setEmail] = useState(auth.user.Email);
  const [country, setCountry] = useState(auth.user.Country);
  const [whatRecommend, setwhatRecommend] = useState(auth.user.whatRecommend);
  const [Type, setType] = useState(auth.user.Type);
  const [RegID, setRegID] = useState(auth.user.RegID);
  const [About, setAbout] = useState(auth.user.About);
 
  const [upi, setUPI] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [accHold, setaccHold] = useState("");
  const [accNum, setaccNum] = useState("");
  const [ifsc, setIfsc] = useState("");
 
  const [categories, getData] = useState<any[]>([])
  const URL = '/categories/'

  useEffect(() => {
    getAllData()
  }, [])
  const getAllData = () => {
    axios
      .get(`${URL}`)
      .then((res) => {
        const sell = res.data
        getData(sell)
      })
      .catch((error) => console.log(`${error}`))
  }

  

  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
          name: name,
          whatRecommend: whatRecommend,
          Type: Type,
          RegID: RegID,
          About: About,
        
          email: email,
         
          country: country

   
      });

      console.log(data)
      var config = {
        method: 'put',
        url: `/sellers/${sellerId}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  if(response.status===200){
      alert('Profile has beeen updated');
      navigate(`/recommender/settings`);
      
  }
 
})
.catch(function (error) {
  alert('Error in updating Seller')
});
      
  }

  let handleBankSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
          upi: upi,
          seller: auth.user._id,
          accNum: accNum,
          accName: accHold,
          bankName: bank,
        
          branch: branch,
         
          ifsc: ifsc

   
      });

      console.log(data)
      var config = {
        method: 'post',
        url: `/accounts`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  if(response.status===200){
      alert('Bank Details has beeen updated');
      navigate(`/settings`);
      
  }
 
})
.catch(function (error) {
  alert('Error in updating Seller')
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
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                What you Recommend <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="123 456 7890"
                type="text"
                value={whatRecommend}
                onChange={(e) => setwhatRecommend(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Selected Type 
                <span className="required">*</span>
              </label>
              <select
                    className='form-control'
                   
                    required
                    name={Type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    {categories.map((cat) => (
                      <option value={cat._id} key={cat._id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                RegID
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="123 456 7890"
                type="text"
                value={RegID}
                onChange={(e) => setRegID(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                About
                <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="Enter About Yourself"
                type="text"
                value={About}
                onChange={(e) => setAbout(e.target.value)}
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
      <div className="row">
        <div className="col-lg-12">
          <div className="main-title">
            <h6>Bank Settings</h6>
          </div>
        </div>
      </div>
      <form onSubmit={handleBankSubmit}>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label className="control-label">
                 UPI <span className="required"></span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="example@upi"
                type="text"
                value={upi}
                onChange={(e) => setUPI(e.target.value)}
              />
            </div>
          </div>
          
       
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Account Holder Name <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="Name"
                type="text"
                value={accHold}
                onChange={(e) => setaccHold(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                
              Account Number <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="123 456 7890"
                type="text"
                value={accNum}
                onChange={(e) => setaccNum(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Bank Name <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="Enter Bank Name"
                type="text"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
               Branch
                <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="Enter Branch"
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                 IFSC <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                defaultValue=""
                placeholder="IFSC"
                type="text"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
              />
            </div>
          </div>
        </div>
       
       
        
        <div className="row">
          <div className="col-sm-12 text-right">
            
            <button type="submit" className="btn btn-success border-none">
              {" "}
             Add Account{" "}
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