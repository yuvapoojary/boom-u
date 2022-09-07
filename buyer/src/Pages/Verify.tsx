import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Verify() {
  const [params] = useSearchParams();
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const onPressVerify = () => {
    if (!otp || otp.length !== 6) return alert('Please enter 6 digit OTP');
    axios
      .post('/auth/verify-otp', {
        email: params.get('email'),
        otp,
      })
      .then((res) => {
        navigate(
          `/signup?email=${params.get('email')}&token=${res.data.token}`
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <section className="login-main-wrapper">
        <div className="container-fluid pl-0 pr-0">
          <div className="row no-gutters">
            <div className="col-md-5 p-5 bg-white full-height">
              <div className="login-main-left">
                <div className="text-center mb-5 login-main-left-header pt-4">
                  <img
                    src="/buyer/assets/img/logo.svg"
                    className="img-fluid"
                    alt="LOGO"
                  />
                  <h5 className="mt-3 mb-3">Verify Your Email ID</h5>
                  <p>We have sent a 4 Digit OTP to verify your Email ID</p>
                </div>

                <div className="form-group">
                  <label>Verification OTP</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter four digit Verification OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="button"
                        onClick={onPressVerify}
                        className="btn btn-outline-primary btn-block btn-lg"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="login-main-right bg-white p-5 mt-5 mb-5">
                <div className="item">
                  <div className="carousel-login-card text-center">
                    <img
                      src="/buyer/assets/img/login.jpg"
                      style={{ width: '350px' }}
                      className="img-fluid"
                      alt="LOGO"
                    />
                    <h5 className="mt-5 mb-3">
                      Buy Recommendations those are worth
                    </h5>
                    <p className="mb-4">
                      Login and buy recommendations and make your portfolio
                      profitable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
