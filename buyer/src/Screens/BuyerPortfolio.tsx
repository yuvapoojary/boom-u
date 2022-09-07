import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../Providers/AuthProvider";

export default function BuyerPortfolio(){
    const auth = useAuth();
    const buyerID = auth.user._id;
    const [recomm, getData] = useState<any[]>([]);

  const URL = `/portfolioofbuyer/${buyerID}`;

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios
      .get(`${URL}`)
      .then((res) => {
        const sell = res.data;
        getData(sell);
      })
    }
    if(Object.keys(recomm).length > 0
    ){

    return(<><div id="content-wrapper">
    <div className="container-fluid pb-0">
<div className="row">
<div className="col-lg-6 text-left ">
        
       
        <h3>Your Portfolio</h3>
        
        
     
    </div>
<div className="col-lg-6 text-right ">
        
       
          <a href= {`/buyer/add-portfolio`} className="mb-3  btn btn-primary ">Add New Portfolio</a>
          
          
       
      </div>

    {recomm.map((New) => (
        <div className="col-lg-4">
        <div className="card">
        <div className="card-body iconfont text-left">
          <h6 className="mb-3">{New.title}</h6>
          <p className="mb-3">{New.description}</p>
          <a href= {`/buyer/holdings/${New._id}`} className="mb-3  btn btn-primary">View or Add Holdings</a>
          
          
        </div>
      </div>
      </div>
    ))}


      

   </div>  </div></div></>)
}
else{return(<><div id="content-wrapper">
<div className="container-fluid pb-0">

<div className="row">
<div className="col-lg-6 text-left ">
        
       
        <h3>No Portfolio Added</h3>
        
        
     
    </div>
<div className="col-lg-6 text-right ">
        
       
          <a href= {`/buyer/add-portfolio`} className="mb-3  btn btn-primary ">Add New Portfolio</a>
          
          
       
      </div>

</div>

 </div></div></>)}}