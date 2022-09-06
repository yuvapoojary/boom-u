
import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useAuth } from "../Providers/AuthProvider";

export default function Dashboard() {
  const auth = useAuth();
  const sellerID = auth.user._id;

  const [posts, getPostsData] = useState<any[]>([])
  const rurl = `/sellerRecommendations/${sellerID}`;

  useEffect(() => {
    getAllPosts();
}, []);
const getAllPosts = () => {
  axios.get(`${rurl}`)
    .then((res) => {
      const buy = res.data;
      getPostsData(buy)
    })
    .catch(error => console.log(`${error}`))
}



const [followers, getfollowersData] = useState<any[]>([])
const furl = `/MyFollowers/${sellerID}`;

useEffect(() => {
  getAllFollowers();
}, []);
const getAllFollowers = () => {
axios.get(`${furl}`)
  .then((res) => {
    const buy = res.data;
    getfollowersData(buy)
  })
  .catch(error => console.log(`${error}`))
}


  const [orders, getOrderData] = useState<any[]>([])
  const orderurl = `/detailedorders/${sellerID}`;

  useEffect(() => {
    getAllOrderData();
}, []);
const getAllOrderData = () => {
  axios.get(`${orderurl}`)
    .then((res) => {
      const buy = res.data;
      getOrderData(buy)
    })
    .catch(error => console.log(`${error}`))
}


const [content, getcontentdata] = useState<any[]>([])
const curl = `/contentorders/${sellerID}`;

useEffect(() => {
  getAllcontent();
}, []);
const getAllcontent = () => {
axios.get(`${curl}`)
  .then((res) => {
    const buy = res.data;
    getcontentdata(buy)
  })
  .catch(error => console.log(`${error}`))
}


   return(<>
    <div id="content-wrapper">
  <div className="container-fluid pb-0">
   
   
  <div className="row">
    <div className="col-lg-3">
    <div className="card" style={{"borderRadius": "10px"}}>
 
  <div className="card-body">
  <i className="fas fa-fw fa-briefcase mb-2" style={{"color": "#000000", "fontSize": "28px"}}/>
    <h4 className="card-title " style={{"color": "#02C5AC","fontWeight": "bolder" }}>Total Posts</h4>
   <h5> {Object.keys(posts).length
}</h5>
  </div>
</div>
    </div>
    <div className="col-lg-3">
    <div className="card" style={{"borderRadius": "10px"}}>
 
  <div className="card-body">
  <i className="fas fa-fw fa-briefcase mb-2" style={{"color": "#000000", "fontSize": "28px"}}/>
    <h4 className="card-title " style={{"color": "#02C5AC","fontWeight": "bolder" }}>Total Followers</h4>
   <h5>{Object.keys(followers).length
}</h5>
  </div>
</div>
    </div>
    <div className="col-lg-3">
    <div className="card" style={{"borderRadius": "10px"}}>
 
  <div className="card-body">
  <i className="fas fa-fw fa-briefcase mb-2" style={{"color": "#000000", "fontSize": "28px"}}/>
    <h4 className="card-title " style={{"color": "#02C5AC","fontWeight": "bolder" }}>Total Sold Content</h4>
   <h5>{Object.keys(content).length
}</h5>
  </div>
</div>
    </div>
    <div className="col-lg-3">
    <div className="card" style={{"borderRadius": "10px"}}>
 
  <div className="card-body">
  <i className="fas fa-fw fa-briefcase mb-2" style={{"color": "#000000", "fontSize": "28px"}}/>
    <h4 className="card-title " style={{"color": "#02C5AC","fontWeight": "bolder" }}>Total Sold Reports</h4>
   <h5>{Object.keys(orders).length
}</h5>
  </div>
</div>
    </div>
    <div className='col-lg-12'>
    
    </div>
    
  </div>
  
    
  </div>
  {/* /.container-fluid */}
  {/* Sticky Footer */}
 
</div>
</>)
}