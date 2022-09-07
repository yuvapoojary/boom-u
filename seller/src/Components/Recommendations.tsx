
import { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from "../Providers/AuthProvider";

export default function Recommendations(){
  
  const auth = useAuth();
  const sellerID = auth.user._id;
  const [recomm, getD] = useState<any[]>([])
   const ur = `/sellerRecommendations/${sellerID}`;

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

 if(Object.keys(recomm).length > 0
 ){

 
 


    return(<>
      <div id="content-wrapper">
  <div className="container-fluid pb-0">
   
    <div className="video-block section-padding">
    <div className="row">
      <div className="col-md-12">
        <div className="main-title">
          
          <h6>My Recommendations</h6>
        </div>
      </div>

      {recomm.map((rPost) => (
      <div className="col-xl-3 col-sm-6 mb-3">
        <div className="video-card">
          <div className="video-card-image">
            <a className="play-icon" href={`/recommender/recommendation/${rPost._id}`}>
              <i className="fas fa-info-circle" />
            </a>
            <a href={`/recommender/recommendation/${rPost._id}`}>
              <img className="img-fluid" src="assets/img/v1.png" alt="" />
            </a>
           
          </div>
          <div className="video-card-body">
            <div className="video-title">
              <a href={`/recommender/recommendation/${rPost._id}`}>{rPost.Recommendation}</a>
            </div>
            <div className="video-page text-success">
            {rPost.Seller.Username}
              <a
                title=""
                data-placement="top"
                data-toggle="tooltip"
                href={`/recommender/recommendation/${rPost._id}`}
                data-original-title="Verified"
              >
                <i className="fas fa-check-circle text-success" />
              </a>
            </div>
            <div className="video-page text-success">
            {rPost.category_id.title}
              <a
                title=""
                data-placement="top"
                data-toggle="tooltip"
                href={`/recommender/recommendation/${rPost._id}`}

              >
               
              </a>
            </div>
            
          </div>
        </div>
      </div>
      ))}
      
    </div>
  </div>
  </div></div>
  </>) }else{
    return (<>
    <div className="video-block section-padding">
    <div className="row">
      <div className="col-md-12">
        <h2 className="text-center">No Recommendations Posted Yet</h2>
      </div>
    </div></div>
    </>
    )
  }
}