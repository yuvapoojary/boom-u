import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Buyer() {
  const [buyers, getData] = useState<any[]>([])
    const URL = '/buyer/';
 
    useEffect(() => {
      getAllData();
 }, []);
  const getAllData = () => {
    axios.get(`${URL}`)
      .then((res) => {
        const buy = res.data;
        getData(buy)
      })
      .catch(error => console.log(`${error}`))
  }
    return(<>
    <div className="page">
			<div className="page-main">
    <Header />
    <Navigation />
    <div className="container content-area relative">
    <div className="row mt-3">
  <div className="col-md-12 col-lg-12">
    <div className="card">
      <div className="card-header">
        <div className="card-title">Buyers</div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
          
            className="table table-bordered text-wrap"
          >
            <thead>
              <tr>
                <th className="border-bottom-0">Name</th>
                <th className="border-bottom-0">Email ID</th>
                <th className="border-bottom-0">Country</th>
               
              </tr>
            </thead>
            <tbody>
            {buyers.map((buyer) => (
              <tr>
                <td>{buyer.Name}</td>
                <td>{buyer.Email}</td>
                <td>{buyer.Country}</td>
            
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

    </>)}