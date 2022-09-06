import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function AddRecommender ()  {
  const navigate = useNavigate();
  const [categories, getData] = useState<any[]>([])
  const URL = '/categories/';

  useEffect(() => {
    getAllData();
}, []);
const getAllData = () => {
  axios.get(`${URL}`)
    .then((res) => {
      const sell = res.data;
      getData(sell)
    })
    .catch(error => console.log(`${error}`))
}
  const [name, setName] = useState("");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [whatRecommends, setwhatRecommends] = useState("");
  const [type, setType] = useState("");
  const [RegID, setRegID] = useState("");
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");


  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
          name: name,
          email: email,
          password: password,
          country: country,
          whatRecommends: whatRecommends,
          type: type,
          RegID: RegID,
          about: about

   
      });

      console.log(data)
      var config = {
        method: 'post',
        url: 'http://localhost:7555/sellers/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  if(response.status===200){
      alert('Recommender Added Successfully');
      navigate("/recommenders");
      
  }
 
})
.catch(function (error) {
  alert('Error in adding recommender')
});
      
  }
  
    
return(  
<>

<div className="page">
			<div className="page-main">
    <Header />
    <Navigation />
    <div className="container content-area relative">
    <div className="row mt-3">
    <div className="col-lg-12">
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header">
        <h3 className="card-title">Add Recommender</h3>
      </div>
      <div className="card-body">
        <div className="row">
        <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
         
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                placeholder="Email Address"
                required
                
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                placeholder="Enter Password"
                
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
            <label className="form-label">Country</label>
              <select className="form-control"
                value={country}
                required
               
                
                onChange={(e) => setCountry(e.target.value)} >
                  <option value={"IN"}>IN</option>
                  <option value={"UK"}>UK</option>
                  <option value={"US"}>US</option>
                  <option value={"HK"}>HK</option>
                </select>
              
              
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">What Recommends</label>
              <input
                type="text"
                className="form-control"
                value={whatRecommends}
                placeholder="What does he recommends"
                required
                
                onChange={(e) => setwhatRecommends(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Type</label>
              <select className="form-control"
                value={type}
               
                required
                name={type}
                onChange={(e) => setType(e.target.value)} >
                 
                 {categories.map((cat) => (
                  <option value={cat._id}>{cat.title}</option>
                 ))}
                </select>
              
              
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Registration ID</label>
              <input
                type="text"
                className="form-control"
                value={RegID}
                placeholder="Registration ID (optional)"
                
                
                onChange={(e) => setRegID(e.target.value)}
              />
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="form-group mb-0">
              <label className="form-label">About Me</label>
              <textarea
               
                className="form-control"
                required
               
                
                value={about}
                placeholder="About Him / her"
                
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
          </div>

        </div>
      </div>
      <div className="card-footer text-right">
        <input type="submit"   className="btn btn-primary" value="Add Recommender"/>
        
       
      </div>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
  </div>
    </div>
    </div>
    <Footer />
 
  {/* COL END */}
</div>
</div>
   </>
      )
    }


export default AddRecommender;