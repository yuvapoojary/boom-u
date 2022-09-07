import { useState } from 'react';
import { useAuth } from '../Providers/AuthProvider';

export default function Login() {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickLogin = () => {
    if (!email?.includes('@')) return alert('Please enter valid email address');
    if (!password) return alert('Please enter password');
    auth.login({ email, password }).catch((err: any) => alert(err.message));
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
                    src="/recommender/assets/img/logo.svg"
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
                    type="text"
                    className="form-control"
                    placeholder="Enter mobile number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-block btn-lg"
                        onClick={onClickLogin}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <p className="light-gray">
                    Don’t have an account? <a href="/recommender/register">Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="login-main-right bg-white p-5 mt-5 mb-5">
                <div className="item">
                  <div className="carousel-login-card text-center">
                    <img
                      src="/recommender/assets/img/login.jpg"
                      style={{ width: '350px' }}
                      className="img-fluid"
                      alt="LOGO"
                    />
                    <h5 className="mt-5 mb-3">
                     Selle Recommendations those are worth
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
