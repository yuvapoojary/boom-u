import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isGeneratorFunction } from "util/types";
import { useAuth } from "../Providers/AuthProvider";

export default function MyFinances(){
    const auth = useAuth();
  const sellerID = auth.user._id;
  const [sellerOrders, getD] = useState<any[]>([])
   const ur = `/sellerOrders/${sellerID}`;

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
      <th scope="col">Buyer Country</th>
      <th scope="col">Recommendation</th>
      <th scope="col">Commission Earned</th>
    </tr>
  </thead>
  <tbody>
  {sellerOrders.map((rPost) => (

    <tr>

<th scope="row">{rPost._id}</th>
<td>{rPost.buyer.Name}</td>
<td>{rPost.buyer.Country}</td>
<td>{rPost.recommendation.Recommendation}</td>
<td>{currency} {rPost.sellerRevenue}</td>
</tr>
))}

    
    
  </tbody>
</table>
</div></div>

    </>)
}


