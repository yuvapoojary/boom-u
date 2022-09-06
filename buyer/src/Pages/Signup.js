import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Register() {
  const [params] = useSearchParams();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('IN');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const onSignup = () => {
    if (!name) return alert('Please enter fullname');
    if (!password) return alert('Please enter password');
    axios
      .post('/buyer', {
        name,
        email: params.get('email'),
        country,
        password,
        token: params.get('token'),
      })
      .then((res) => {
        alert('Signed up successfully, please login to continue');
        navigation('/');
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
                    src="assets/img/logo.svg"
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
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Email"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="form-control"
                  >
                    <option value={'IN'}>India</option>
                    <option value={'US'}>United States of America</option>
                    <option value={'UK'}>United Kingdom</option>
                    <option value={'HK'}>Hong Kong</option>
                  </select>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-block btn-lg"
                        onClick={onSignup}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <p className="light-gray">
                    Already have an account? <a href="/login">Sign In</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="login-main-right bg-white p-5 mt-5 mb-5">
                <div className="item">
                  <div className="carousel-login-card text-center">
                    <img
                      src="assets/img/login.jpg"
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
