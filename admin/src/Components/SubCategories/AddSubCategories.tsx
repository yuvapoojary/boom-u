import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Navigation from "../../layouts/Navigation";
import { useState, useEffect } from "react";
import axios from 'axios';


function AddSubCategories ()  {
  const [categories, getData] = useState<any[]>([])
  const URL = '/api/categories/';

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
  const [sub_category, setName] = useState("");
  const [category_id, setCategory] = useState("");
  
 
  const [message, setMessage] = useState("");


  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
      var data = JSON.stringify({
       
        sub_category: sub_category,
          category_id: category_id
         

   
      });

      console.log(data)
      var config = {
        method: 'post',
        url: 'https://boominance.herokuapp.com/subcategories/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
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
        <h3 className="card-title">Add Sub Category</h3>
      </div>
      <div className="card-body">
        <div className="row">
        <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={sub_category}
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
         
         
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Select Category</label>
              <select className="form-control"
                value={category_id}
               
                required
                name={category_id}
                onChange={(e) => setCategory(e.target.value)} >
                 
                 {categories.map((cat) => (
                  <option value={cat._id}>{cat.title}</option>
                 ))}
                </select>
              
              
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


export default AddSubCategories;