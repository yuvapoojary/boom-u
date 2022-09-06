import React, { useState, useEffect } from 'react';
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import axios from 'axios';
export default function Sellers() {
  const [sellers, getData] = useState<any[]>([])
    const URL = '/sellers/';
 
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

    return(
    <>
    <div className="page">
			<div className="page-main">
    <Header />
    <Navigation />
    <div className="container content-area relative">
    <div className="row mt-3">
  <div className="col-md-12 col-lg-12">
    <div className="card">
      <div className="card-header">
        <div className="card-title">Recommenders</div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
           
            className="table table-bordered text-wrap"
          >
            <thead>
              <tr>
                <th className="border-bottom-0">Name</th>
                <th className="border-bottom-0">Username</th>
                <th className="border-bottom-0">Email Address</th>
                <th className="border-bottom-0">Country</th>
                <th className="border-bottom-0">What Recommends</th>
                <th className="border-bottom-0">Type</th>
               
                <th className="border-bottom-0">Reg ID</th>
                <th className="border-bottom-0">About Recommender</th>
              </tr>
            </thead>
            <tbody>
            {sellers.map((selle) => (
              <tr key={selle._id}>
                <td>{selle.Name}</td>
                <td>{selle.Username}</td>
                <td>{selle.Email}</td>
                <td>{selle.Country}</td>
                <td>{selle.whatRecommend}</td>
                <td>{selle.Type.title}</td>
                <td>{selle.RegID } </td>
                <td>{selle.About}</td>
              </tr>
            ))}
              
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  </div>

    </div>
</div>
<Footer />
</div>
</div>

    </>
     )}


