import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const navigation = useNavigate();

  const sendOTP = () => {
    if (!email) return alert('Please enter email');
    axios
      .post('/auth/send-otp', {
        email,
        type: 1,
      })
      .then((res) => {
        navigation(`/verify?email=${email}`);
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
                  <h5 className="mt-3 mb-3">Welcome to Boominance</h5>
                  <p>
                    It is a long established fact that a reader <br /> will be
                    distracted by the readable.
                  </p>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-block btn-lg"
                        onClick={sendOTP}
                      >
                        Send OTP
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <p className="light-gray">
                    Already have an account? <a href="/buyer/login">Sign In</a>
                  </p>
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
                      Login and buy recommendations and make your protfolio
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
