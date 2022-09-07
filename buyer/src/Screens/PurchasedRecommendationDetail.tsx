import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../Providers/AuthProvider';

export default function PurchasedDetailRecommendation() {
  const params = useParams();
  const auth = useAuth();
  const navigate = useNavigate();
  var orderID = params.orderID;
  console.log(orderID);

  var recommendationID = params.recommendationID;

  const [order, getOrderDetailData] = useState<any>({});

  const orderURL = `/order/${orderID}`;

  useEffect(() => {
    getAllDetailData();
  }, []);
  const getAllDetailData = () => {
    axios
      .get(`${orderURL}`)
      .then((res) => {
        const orderpresent = res.status;

        getOrderDetailData(orderpresent);
      })
      .catch((error) => console.log(`${error}`));
  };

  const [detailOrder, getOrderData] = useState<any>({});

  const oURL = `/order/${orderID}`;

  useEffect(() => {
    getOD();
  }, []);
  const getOD = () => {
    axios
      .get(`${oURL}`)
      .then((res) => {
        const orderDetail = res.data;

        getOrderData(orderDetail);
      })
      .catch((error) => console.log(`${error}`));
  };

  const [review, setReview] = useState('');

  let handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    var data = JSON.stringify({
      recommendation: recommendationID,
      buyer: auth.user._id,
      seller: detailOrder.seller._id,
      review: review,

      orderID: orderID,
    });

    console.log(data);
    var config = {
      method: 'post',
      url: '/review/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          alert('Review Submitted Successfully');
          navigate(`/purchasedrecommendation/${recommendationID}/${orderID}`);
        }
      })
      .catch(function (error) {
        alert('Error in adding review');
      });
  };

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
                          src="/buyer/assets/img/v1.webp"
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
                              {order === 200 ? (
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
                              {order === 200 ? (
                                recommendation.TargetPeriod
                              ) : (
                                <span className="fas fa-lock" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th>Sector</th>
                            <td>
                              {order === 200 ? (
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
                              {order === 200 ? (
                                recommendation.MarketCaptilization
                              ) : (
                                <span className="fas fa-lock" />
                              )}
                            </td>
                          </tr>
                        </thead>
                      </table>

                      <hr />
                      {detailOrder.isDetailed ? (
                        <>
                          <h5>Detailed Analysis Includes</h5>
                          <p>{recommendation.DetailedReport.Includes}</p>
                          <table className="table table-bordered ">
                            <thead>
                              <tr>
                                <th>Value Proposition</th>
                                <td>
                                  PE Ratio:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .ValuationRatioData.PE
                                  }
                                  <br />
                                  PBE Ratio:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .ValuationRatioData.PBE
                                  }
                                  <br />
                                  EBITDA Ratio:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .ValuationRatioData.EBITDA
                                  }
                                  <br />
                                  RoE Ratio:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .ValuationRatioData.RoE
                                  }
                                  <br />
                                  EPS Ratio:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .ValuationRatioData.EPS
                                  }
                                  <br />
                                  Dividend Yield:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .ValuationRatioData.DividendYield
                                  }
                                </td>
                              </tr>
                              <tr>
                                <th>Price Performance</th>

                                <td>
                                  One Week:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .PricePerformance.one_week
                                  }
                                  <br />
                                  One Month:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .PricePerformance.one_month
                                  }
                                  <br />
                                  Three Months:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .PricePerformance.three_months
                                  }
                                  <br />
                                  One Year:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .PricePerformance.one_year
                                  }
                                  <br />
                                  Three Years:{' '}
                                  {
                                    recommendation.DetailedReport
                                      .PricePerformance.three_years
                                  }
                                </td>
                              </tr>
                            </thead>
                          </table>
                        </>
                      ) : null}
                    </div>
                    <div className="box mb-3 single-video-comment-tabs">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="retro-comments"
                          role="tabpanel"
                          aria-labelledby="retro-comments-tab"
                        >
                          <h6>Give Review</h6>
                          <div className="reviews-members pt-0">
                            <div className="">
                              <form onSubmit={handleSubmit}>
                                <div className="media-body col-lg-12 ">
                                  <div className="form-members-body ">
                                    <textarea
                                      rows={1}
                                      placeholder="Add a public comment..."
                                      className="form-control"
                                      value={review}
                                      style={{
                                        display: 'block',
                                        width: '100%',
                                      }}
                                      onChange={(e) =>
                                        setReview(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div className="form-members-footer text-right mt-2">
                                    <button
                                      className="btn btn-primary btn-sm"
                                      type="submit"
                                    >
                                      Give Review
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>

                          {reviews.map((rev) => (
                            <div className="reviews-members">
                              <div className="media">
                                <div className="media-body">
                                  <div className="reviews-members-header">
                                    <h6 className="mb-1">
                                      <a className="text-black" href="#">
                                        {rev.buyer.Name}
                                      </a>{' '}
                                      <small className="text-gray">
                                        Registered Buyer
                                      </small>
                                    </h6>
                                  </div>
                                  <div className="reviews-members-body">
                                    <p>{rev.Review}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
