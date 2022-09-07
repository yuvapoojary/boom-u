import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useRazorpay from 'react-razorpay';

export default function DetailRecommendation() {
  const params = useParams();
  const Razorpay = useRazorpay();

  var recommendationID = params.recommendationID;
  console.log(recommendationID);

  const [recommendation, getData] = useState<any>({});

  const URL = `/recommendation/${recommendationID}`;

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

  const OURL = `/ordersByRecommendation/${recommendationID}`;

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
      type,
    });
    console.log(data);
    const rz1 = new Razorpay({
      key: data.keyId,
      order_id: data.orderId,
      currency: 'INR',
      name: 'Boominance',
      amount: `${data.amount * 100}`,
      handler: function (response) {
        axios.post(`/orders/${data.id}`, response).then((res) => {
          alert('sucess');
        });
      },
    });
    rz1.open();
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
                          src="%PUBLIC_URL%/assets/img/v1.webp"
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
                        Buy Content @ INR {recommendation.price}
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
                            Buy Detailed Analysis @ INR{' '}
                            {recommendation.DetailedReport.Price}
                          </button>
                        </>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className="card padding-card reviews-card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-4">3 Reviews</h5>
        <div className="media mb-4">
          <img alt="" src="/assets/img/s2.png" className="d-flex mr-3 rounded" />
          <div className="media-body">
            <h5 className="mt-0">
              Stave Martin <small>Feb 12, 2018</small>
              <span className="star-rating float-right">
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star-half text-warning" />
                <i className="fas fa-star-half text-warning" />
                <small className="text-success">5/2</small>
              </span>
            </h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
        <div className="media">
          <img alt="" src="/assets/img/s1.png" className="d-flex mr-3 rounded" />
          <div className="media-body">
            <h5 className="mt-0">
              Mark Smith <small>Feb 09, 2018</small>{" "}
              <span className="star-rating float-right">
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star-half text-warning" />
                <i className="fas fa-star-half text-warning" />
                <i className="fas fa-star-half text-warning" />
                <i className="fas fa-star-half text-warning" />
                <small className="text-success">5/1</small>
              </span>
            </h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
            <div className="media mt-4">
              <img alt="" src="/assets/img/s3.png" className="d-flex mr-3 rounded" />
              <div className="media-body">
                <h5 className="mt-0">
                  Ryan Printz <small>Nov 13, 2018</small>{" "}
                  <span className="star-rating float-right">
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star-half text-warning" />
                    <i className="fas fa-star-half text-warning" />
                    <i className="fas fa-star-half text-warning" />
                    <small className="text-success">5/5</small>
                  </span>
                </h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
              
              </div>
            </div>
          </div>
        </div>
        <div className="media mt-4">
          <img alt="" src="/assets/img/s4.png" className="d-flex mr-3 rounded" />
          <div className="media-body">
            <h5 className="mt-0">
              Stave Mark <small>Feb 12, 2018</small>
              <span className="star-rating float-right">
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star-half text-warning" />
                <i className="fas fa-star-half text-warning" />
                <small className="text-success">5/2</small>
              </span>
            </h5>
            <p className="mb-0">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
      </div>
    </div> */}
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
