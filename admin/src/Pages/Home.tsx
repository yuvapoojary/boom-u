
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const data = localStorage.getItem('access')

  if(!data){
    navigate("/login");
  }

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
  const [buyers, getBuyData] = useState<any[]>([])
    const buyerurl = '/buyer/';
 
    useEffect(() => {
      getAllBuyData();
 }, []);
  const getAllBuyData = () => {
    axios.get(`${buyerurl}`)
      .then((res) => {
        const buy = res.data;
        getBuyData(buy)
      })
      .catch(error => console.log(`${error}`))
  }

  const [orders, getOrderData] = useState<any[]>([])
  const orderurl = '/buyer/';

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

const [transactions, getTransactionData] = useState<any[]>([])
const transactionurl = '/orders/';

useEffect(() => {
  getAllTransactionData();
}, []);
const getAllTransactionData = () => {
axios.get(`${transactionurl}`)
  .then((res) => {
    const buy = res.data;
    getTransactionData(buy)
  })
  .catch(error => console.log(`${error}`))
}

  let sum = transactions.reduce(function(prev, current) {
    return prev + +current.amount
  }, 0);

  let sellerRev = transactions.reduce(function(prev, current) {
    return prev + +current.sellerRevenue
  }, 0);

  let adminRev = transactions.reduce(function(prev, current) {
    return prev + +current.adminRevenue
  }, 0);



    return(
        <>
        <div className="page">
    <div className="page-main">
      {/* HEADER */}
     <Header />
      {/* HEADER END */}
      {/* HORIZONTAL-MENU */}
      <Navigation />
      {/* HORIZONTAL-MENU END */}
      {/* CONTAINER */}
      <div className="container content-area relative">
        {/* PAGE-HEADER */}
        <div className="page-header">
          <h4 className="page-title">Dashboard</h4>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </div>
        {/* PAGE-HEADER END */}
        {/* ROW-1 */}
        <div className="row">
          <div className="col-sm-6 col-lg-6 col-xl-3">
            <div className="card">
              <div className="card-body iconfont text-left">
                <h6 className="mb-3">Total Buyers</h6>
                <h2 className="mb-1 text-dark display-4 font-weight-bold">
                 {Object.keys(buyers).length
}
                </h2>
                
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-3">
            <div className="card">
              <div className="card-body iconfont text-left">
                <h6 className="mb-3">Total Recommenders</h6>
                <h2 className="mb-1 text-dark display-4 font-weight-bold">
                {Object.keys(sellers).length
}
                </h2>
                
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-3">
            <div className="card">
              <div className="card-body iconfont text-left">
                <h6 className="mb-3">Total Orders</h6>
                <h2 className="mb-1 text-dark display-4 font-weight-bold">
                {Object.keys(orders).length
}
                </h2>
                
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-3">
            <div className="card">
              <div className="card-body iconfont text-left">
                <h6 className="mb-3">Total Revenue</h6>
                <h2 className="mb-1 text-dark display-4 font-weight-bold">
                ₹ {sum}
                </h2>
                
              </div>
            </div>
          </div>
        </div>
        {/* ROW-1 END */}
        {/* ROW-2 */}
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="">
                        <p className="mb-1 font-weight-semibold">
                          Recommender Revenue
                        </p>
                        <h2 className="mt-2 mb-2 display-6 font-weight-bold">
                        ₹ {sellerRev}
                        </h2>
                        
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="">
                        <p className="mb-1 font-weight-semibold">Net Revenue</p>
                        <h2 className="mt-2 mb-2 display-6 font-weight-bold">
                        ₹ {adminRev}
                        </h2>
                        
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
       
        {/* ROW-3 END */}
        {/* ROW-4 */}
        <div className="row">
          <div className="col-md-12 col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Latest Transactions Details</div>
              </div>
              <div className="">
                <div className="table-responsive">
                  <table className="table table-hover card-table table-striped table-vcenter table-outline text-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        
                        <th scope="col">Amount Paid</th>
                        <th scope="col">Transaction ID</th>
                        <th scope="col">Transaction Date</th>
                      </tr>
                    </thead>
                  <tbody>
                    
                      {transactions.slice(0,10).map((trans) =>  (
                      <tr>
                        <td>{trans._id}</td>
                        <td>₹ {trans.amount}</td>
                        <td className="text-success">{trans.orderId}</td>
                        <td>{trans.createdAt}</td>
                       
                      </tr>
                      ))}
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ROW-4 END */}
      </div>
      {/* CONTAINER END */}
    </div>
    {/* SIDE-BAR */}
   
    {/* SIDE-BAR CLOSED */}
    {/* FOOTER */}
 <Footer />
    {/* FOOTER END */}
  </div>
  {/* BACK-TO-TOP */}
  <a href="#top" id="back-to-top">
    <i className="fa fa-long-arrow-up" />
  </a></>
    )
}