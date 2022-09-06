import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Orders() {
  
  const [orders, getData] = useState<any[]>([])
    const URL = '/orders/';
 
    useEffect(() => {
      getAllData();
 }, []);
  const getAllData = () => {
    axios.get(`${URL}`)
      .then((res) => {
        const ord = res.data;
        getData(ord)
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
        <div className="card-title">Orders</div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            
            className="table table-bordered  text-nowrap"
          >
            <thead>
              <tr>
                <th className="border-bottom-0">ID</th>
                <th className="border-bottom-0">Recommendation</th>
               
                <th className="border-bottom-0">Purchased By</th>
                <th className="border-bottom-0">Amount Paid</th>
                <th className="border-bottom-0">Order On</th>
              </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order._id}</td>
                <td>{order.recommendation.Recommendation}</td>
                
             
                <td>{order.buyer.Name}</td>
                <td>Rs. {order.amount}</td>
                <td>{order.buyer.createdAt}</td>
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