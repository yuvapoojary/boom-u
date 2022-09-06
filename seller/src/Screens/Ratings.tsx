import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isGeneratorFunction } from "util/types";
import { useAuth } from "../Providers/AuthProvider";

export default function Ratings(){
    const auth = useAuth();
    const navigate = useNavigate();
  const sellerID = auth.user._id;
  const [sellerOrders, getD] = useState<any[]>([])
   const ur = `/sellerRatings/${sellerID}`;

   useEffect(() => {
     getAl();
}, []);
 const getAl = () => {
   axios.get(`${ur}`)
     .then((res) => {
       const sell = res.data;
       getD(sell)
     })
     .catch(error => console.log(`${error}`))
 } 

 const sellerCountry = auth.user.Country;
let currency ='';
  if(sellerCountry==='IN'){
     currency = "INR"
  } else if(sellerCountry ==='UK'){
     currency = "GBP"
  } else if(sellerCountry ==='US'){
    
     currency = "USD"

  }else{
     currency = "HKD"
  }
 
 
 

    return(<>
     <div id="content-wrapper">
  <div className="container-fluid pb-0">
   
   
  <div className="row"></div>
    <table className="table table-bordered table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Buyer Name</th>
     
      <th scope="col">Type</th>
      <th scope="col">Rating</th>
      <th scope="col">Feedback</th>
     
    </tr>
  </thead>
  <tbody>
  {sellerOrders.map((rPost) => (

    <tr>

<th scope="row">{rPost._id}</th>
<td>{rPost.buyer.Name}</td>
<td>{rPost.type}</td>
<td>{rPost.rating} / 5</td>
<td>{rPost.feedback}</td>

</tr>
))}

    
    
  </tbody>
</table>
</div></div>

    </>)
}


