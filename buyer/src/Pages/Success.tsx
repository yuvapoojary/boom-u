import Header from '../Components/Header';
import Scrolltop from '../Components/Scrolltop';
import Sidebar from '../Components/Sidebar';

import DetailRecommendation from '../Screens/RecommendationDetail';

export default function Success() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper">
          <div className="container-fluid pb-0">
            <div className="col-lg-12 text-center ">
              <div className="card" style={{ borderRadius: '10px' }}>
                <div className="card-body">
                  <img
                    src="/buyer/assets/img/sucess-transparent.gif"
                    width={150}
                  />
                  <h3>Recommendation Purchased Successfully</h3>
                  <p>
                    Now you can check your purchased Recommendations anytime
                    from here
                  </p>
                  <a href="/buyer/purchases" className="btn btn-primary btm-md">
                    Check Your Purchases
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scrolltop />
    </>
  );
}
