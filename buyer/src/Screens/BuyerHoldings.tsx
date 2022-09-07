import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

export default function BuyerHoldings(){
    const params = useParams();
    const portfolioId = params.portfolioId;
    const auth = useAuth();
    const buyerID = auth.user._id;
    const [recomm, getData] = useState<any[]>([]);

  const URL = `/portfolioHoldings/${portfolioId}`;

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
        
       
        <h3>Your Holdings</h3>
        
        
     
    </div>
<div className="col-lg-6 text-right ">
        
       
          <a href= {`/buyer/add-holding/${portfolioId}`} className="mb-3  btn btn-primary ">Add New Holding</a>
          
          
       
      </div>

    {recomm.map((New) => (
        <div className="col-lg-4">
        <div className="card">
        <div className="card-body iconfont text-left">
            <h4>Holdings</h4>
          <h6 className="mb-3">{New.portfolio.title}</h6>
          <hr />
          <div className="row">
            <div className="col-lg-6 text-left">
                <h6>Current Value</h6>
                <h5>Rs. {New.quantity*New.price}</h5>
                </div>
                <div className="col-lg-6 text-right">
                <h6 >Invested</h6>
                <h5>Rs. {New.quantity*New.price}</h5>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6 text-left">
                <h6>Unrealised Gain</h6>
                <h5>Rs. {New.quantity*New.price}</h5>
                </div>
                <div className="col-lg-6 text-right">
                <h6 >Day Gain</h6>
                <h5>Rs. {New.quantity*New.price}</h5>
                </div>
            </div>
          <a href= {`/buyer/holdings/${New._id}`} className="mb-3  btn btn-warning btn-block">Delete Holdings</a>
          
          
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
        
       
        <h3>No Holding Added</h3>
        
        
     
    </div>
<div className="col-lg-6 text-right ">
        
       
          <a href= {`/buyer/add-holding/${portfolioId}`} className="mb-3  btn btn-primary ">Add New Holding</a>
          
          
       
      </div>

</div>

 </div></div></>)}}