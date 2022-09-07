import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isGeneratorFunction } from "util/types";
import { useAuth } from "../Providers/AuthProvider";

export default function Reviews(){
    const auth = useAuth();
    const navigate = useNavigate();
  const sellerID = auth.user._id;
  const [sellerOrders, getD] = useState<any[]>([])
   const ur = `/RecommendationreviewforSeller/${sellerID}`;

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
 
 const accept = (props: any) =>{
    let reviewID = props;
    var data = JSON.stringify({
       
        status: true,
       });

      console.log(data)
      var config = {
        method: 'put',
        url: `/review/${reviewID}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  if(response.status===200){
      alert('Review has been accepted, status changed');
      navigate('/recommender/reviews')
      }
 
})
.catch(function (error) {
  alert('Error in updating status of review')
});
   
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
      <th scope="col">Review</th>
      <th scope="col">Recommendation</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {sellerOrders.map((rPost) => (

    <tr>

<th scope="row">{rPost._id}</th>
<td>{rPost.buyer.Name}</td>
<td>{rPost.Review}</td>
<td>{rPost.Recommendation.Recommendation}</td>
<td>{rPost.status=== true ? 'Accepted' : (<><button className="btn btn-primary"  onClick={()=> accept(rPost._id)}>Accept</button></>)} </td>
</tr>
))}

    
    
  </tbody>
</table>
</div></div>

    </>)
}


