import { useRef, useState } from 'react';
import Header from '../Components/Header';
import Scrolltop from '../Components/Scrolltop';
import Sidebar from '../Components/Sidebar';

import DetailRecommendation from '../Screens/RecommendationDetail';

export default function Refer() {
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
                    src="%PUBLIC_URL%/assets/img/sucess-transparent.gif"
                    width={150}
                  />
                  <h3>Refering is Caring</h3>
                  <p>
                    Refer your friend or family, in order to make them
                    profitable by using this platform.
                  </p>
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
