import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useRazorpay from 'react-razorpay';
import { useAuth } from '../Providers/AuthProvider';


export default function DetailRecommendation() {
  const auth = useAuth();
  let country = auth.user.Country;
 let currency ='';
  if(country==='IN'){
     currency = "INR"
  } else if(country ==='UK'){
     currency = "GBP"
  } else if(country ==='US'){
    
     currency = "USD"

  }else{
     currency = "HKD"
  }

  
  const params = useParams();
  const Razorpay = useRazorpay();
  const navigate = useNavigate();
  var recommendationID = params.recommendationID;
  
  console.log(recommendationID);


  
  const [recommendation, getData] = useState<any>({});

  const URL = `https://boominance.herokuapp.com/recommendation/${recommendationID}`;

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
      .catch((error) => console.log(`${error}`));
  };

 



  const [orderCount, getOrderData] = useState<any>({});

  const OURL = `https://boominance.herokuapp.com/ordersByRecommendation/${recommendationID}`;

  useEffect(() => {
    getAllDownloadsData();
  }, []);

  const getAllDownloadsData = () => {
    axios
      .get(`${OURL}`)
      .then((res) => {
        const sell = res.data;
        getOrderData(sell);
      })
      .catch((error) => console.log(`${error}`));
  };

  const makePayment = async (type: string) => {
    const { data } = await axios.post('/orders', {
      recommendationId: recommendationID,
      seller: recommendation.Seller._id,
      currency : currency,
      SellerCreationDate: recommendation.Seller.createdAt,
      type,
    });
    console.log(data);
    const rz1 = new Razorpay({
      key: data.keyId,
      order_id: data.orderId,
      currency: `${currency}`,
      name: 'Boominance',
      amount: `${data.amount * 100}`,
      handler: function (response) {
        axios.post(`/orders/${data.id}`, response).then((res) => {
          navigate('/success');
        });
      },
    });
    console.log(rz1)
    rz1.open();
  };

  const [reviews, getReviews] = useState<any[]>([]);
  const reviewULR = `/Recommendationreview/${recommendationID}`;

  useEffect(() => {
    getAllReviewData();
  }, []);
  const getAllReviewData = () => {
    axios
      .get(`${reviewULR}`)
      .then((res) => {
        const reviewsdata = res.data;
        
       
        getReviews(reviewsdata);
      })
      .catch((error) => console.log(`${error}`));
  };
  return (
    <>
      <div id="content-wrapper">
        <div className="container-fluid pb-0">
          <section className="blog-page section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="card blog mb-4">
                    <div className="blog-header">
                      <a href="#">
                        <img
                          className="card-img-top"
                          src="/assets/img/v1.webp"
                          alt="Card image cap"
                          height={350}
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">{recommendation.Recommendation}</a>
                      </h4>
                      <div className="entry-meta">
                        <ul className="tag-info list-inline">
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fas fa-calendar" /> March 6, 2018
                            </a>
                          </li>
                          {/* <li className="list-inline-item">
              <i className="fas fa-folder" />{" "}
              <a rel="category tag" href="#">
              {recommendation.category_id.title}
              </a>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-tag" />{" "}
              <a rel="tag" href="#">
              {recommendation.sub_category_id.sub_category}
              </a>
             
            </li> */}
                          <li className="list-inline-item">
                            <i className="fas fa-comment" />{' '}
                            <a href="#">
                              {' '}
                              {Object.keys(orderCount).length} Sales
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5>Content Includes</h5>
                      <p>{recommendation.ContentIncludes}</p>
                      <table className="table table-bordered ">
                        <thead>
                          <tr>
                            <th>Target</th>
                            <td>
                              {' '}
                              {recommendation.TargetVisible === true ? (
                                recommendation.Target
                              ) : (
                                <span className="fas fa-lock" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th>Target Period</th>
                            <td>
                              {' '}
                              {recommendation.TargetPeriodVisible === true ? (
                                recommendation.TargetPeriod
                              ) : (
                                <span className="fas fa-lock" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th>Sector</th>
                            <td>
                              {recommendation.SectorVisible === true ? (
                                recommendation.Sector
                              ) : (
                                <span className="fas fa-lock" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th>Market Captalization</th>
                            <td>
                              {' '}
                              {recommendation.MarketCaptilizationVisible ===
                              true ? (
                                recommendation.MarketCaptilization
                              ) : (
                                <span className="fas fa-lock" />
                              )}
                            </td>
                          </tr>
                        </thead>
                      </table>

                      <button
                        onClick={() => makePayment('content')}
                        className="btn btn-lg btn-primary"
                      >
                        Buy Content @ {currency} {recommendation.price}
                      </button>

                      <hr />
                      {recommendation.isDetailedReport === true ? (
                        <>
                          <h5>Detailed Analysis Includes</h5>
                          <p>{recommendation.DetailedReport.Includes}</p>
                          <table className="table table-bordered ">
                            <thead>
                              <tr>
                                <th>Value Proposition</th>
                                <td>
                                  {' '}
                                  <i className="fas fa-lock" />
                                </td>
                              </tr>
                              <tr>
                                <th>Price Performance</th>
                                <td>
                                  {' '}
                                  <i className="fas fa-lock" />
                                </td>
                              </tr>
                            </thead>
                          </table>

                          <button
                            onClick={() => makePayment('report')}
                            className="btn btn-lg btn-primary"
                          >
                            Buy Detailed Analysis @ {currency} {' '}
                            {recommendation.DetailedReport.Price}
                          </button>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <div className="box mb-3 single-video-comment-tabs">
  
  <div className="tab-content">
   
    <div
      className="tab-pane fade show active"
      id="retro-comments"
      role="tabpanel"
      aria-labelledby="retro-comments-tab"
    >
      

      {reviews.map((rev) => 
      <div className="reviews-members">
        <div className="media">
          
          <div className="media-body">
            <div className="reviews-members-header">
              <h6 className="mb-1">
                <a className="text-black" href="#">
                  {rev.buyer.Name}
                </a>{" "}
                <small className="text-gray">Registered Buyer</small>
              </h6>
            </div>
            <div className="reviews-members-body">
              <p>
               {rev.Review}
              </p>
            </div>
            
          </div>
        </div>
      </div>
       )}
    </div>
  </div>
</div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* /.container-fluid */}
        {/* Sticky Footer */}
      </div>
    </>
  );
}
