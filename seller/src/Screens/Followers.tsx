import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isGeneratorFunction } from "util/types";
import { useAuth } from "../Providers/AuthProvider";

export default function Followers(){
    const auth = useAuth();
  const sellerID = auth.user._id;
  const [sellerOrders, getD] = useState<any[]>([])
   const ur = `/MyFollowers/${sellerID}`;

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
      <th scope="col">Following Since</th>
     
     
    </tr>
  </thead>
  <tbody>
  {sellerOrders.map((rPost) => (

    <tr>

<th scope="row">{rPost._id}</th>
<td>{rPost.buyer.Name}</td>
<td>{rPost.buyer.Country}</td>
<td>{rPost.createdAt}</td>

</tr>
))}

    
    
  </tbody>
</table>
</div></div>

    </>)
}


