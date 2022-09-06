import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';

export default function Collection() {
  const auth = useAuth();
  const params = useParams();

  const sellerID = params.sellerId;

  const [recomm, getD] = useState<any[]>([]);
  const ur = `/sellerRecommendations/${sellerID}`;

  useEffect(() => {
    getAl();
  }, []);
  const getAl = () => {
    axios
      .get(`${ur}`)
      .then((res) => {
        const sell = res.data;
        getD(sell);
      })
      .catch((error) => console.log(`${error}`));
  };

  function follow() {
    var data = JSON.stringify({
      seller: sellerID,
      buyer: auth.user._id,
    });

    console.log(data);
    var config = {
      method: 'post',
      url: '/followers/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          alert('You started Following, you will get updates');
        }
      })
      .catch(function (error) {
        alert('Error in adding recommender');
      });
  }

  const [seller, getSD] = useState<any>({});
  const sur = `/sellers/${sellerID}`;

  useEffect(() => {
    getAls();
  }, []);
  const getAls = () => {
    axios
      .get(`${sur}`)
      .then((res) => {
        const sell = res.data;
        getSD(sell);
      })
      .catch((error) => console.log(`${error}`));
  };

  if (Object.keys(recomm).length > 0) {
    return (
      <>
        <div id="content-wrapper">
          <div className="container-fluid upload-details">
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-6">
                  <div className="main-title">
                    <h6>{seller.Username} Recommendations</h6>
                  </div>
                </div>
                <div className="col-md-4 right">
                  <div className="main-title">
                    <div className="col-xl-12 col-sm-12 mb-3 text-right">
                      <button
                        className="btn btn-lg btn-primary"
                        onClick={follow}
                      >
                        Follow {seller.Username}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 text-right">
                  <div className="main-title">
                    <div className="col-xl-12 col-sm-12 mb-3 ">
                      <a
                        href={`/give-rating/${sellerID}`}
                        className="btn btn-lg btn-primary"
                      >
                        Give Rating
                      </a>
                    </div>
                  </div>
                </div>

                {recomm.map((rPost) => (
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <a
                          className="play-icon"
                          href={`/recommendation/${rPost._id}`}
                        >
                          <i className="fas fa-info-circle" />
                        </a>
                        <a href={`/recommendation/${rPost._id}`}>
                          <img
                            className="img-fluid"
                            src="%PUBLIC_URL%/assets/img/v1.webp"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <a href={`/recommendation/${rPost._id}`}>
                            {rPost.Recommendation}
                          </a>
                        </div>
                        <div className="video-page text-success">
                          <a
                            title=""
                            data-placement="top"
                            data-toggle="tooltip"
                            href={`/collections/${rPost.Seller._id}`}
                            data-original-title="Verified"
                          >
                            {rPost.Seller.Username}
                            <i className="fas fa-check-circle text-success" />
                          </a>
                        </div>
                        <div className="video-page text-success">
                          {rPost.category_id.title}
                          <a
                            title=""
                            data-placement="top"
                            data-toggle="tooltip"
                            href={`/recommendation/${rPost._id}`}
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="video-block section-padding">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">No Recommendations Posted Yet</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}
