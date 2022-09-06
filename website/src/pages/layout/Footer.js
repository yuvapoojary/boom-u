import React from 'react';

class Footer extends React.Component {
  render() {
    const style = {
      fontSize: 15,
    };
    return (
      <footer class="footer-wrapper footer-2">
        <div class="footer-widgets-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                <div class="single-footer-widget wow fadeInLeft">
                  <div class="about-us-widget">
                    <a href="/" class="footer-logo d-block">
                      <img src="img/logo-black.svg" alt="xmoze" />
                    </a>
                    <p>The Boom for everyone</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
                <div
                  class="single-footer-widget wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  <div class="widget-title">
                    <h5>Company</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="who-we-are">About Boominance</a>
                    </li>
                    <li>
                      <a href="help-support">Help &amp; support</a>
                    </li>
                    <li>
                      <a href="privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="terms-and-conditions">Terms &amp; conditions</a>
                    </li>
                    <li>
                      <a href="disclaimer-policy">Disclaimer Policy</a>
                    </li>
                    <li>
                      <a href="refund-policy">Refund Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
                <div
                  class="single-footer-widget wow fadeInLeft"
                  data-wow-delay=".4s"
                >
                  <div class="widget-title">
                    <h5>Quick Links</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="features">Our Recommenders</a>
                    </li>
                    <li>
                      <a href="how-it-works">Contact For Business</a>
                    </li>
                    <li>
                      <a href="https://boominance.com/register">
                        Become a Recommender
                      </a>
                    </li>

                    <li>
                      <a href="buyer">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
                <div
                  class="single-footer-widget wow fadeInLeft"
                  data-wow-delay=".6s"
                >
                  <div class="widget-title">
                    <h5>Support</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="raise-a-ticket">Raise a Ticket</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <p style={style}>
                  All investing involves risk. Read all the information
                  carefully before investing.
                </p>
                <p style={style}>
                  Investing and trading entails significant risk and is not
                  appropriate for all customers. Customers understand the market
                  characteristics and standards. Trading may involve the
                  potential of losing the entire investment in a relatively
                  short period of time.Certain complex trading strategies carry
                  additional risk, including the potential for losses that may
                  exceed the original investment amount.
                </p>
                <p style={style}>
                  Boominance Private Limited is not a trading, brokerage,
                  financial intermediary platform. Boominnance only facilitates
                  the transaction of information of investments between
                  customers. Boominance is not affiliated with any
                  cryptocurrency or security exchange platform. Read our
                  Disclaimer Policy before registering with our website. All the
                  recommenders are onboarded after certain verifications.
                  Boominace does not support any transaction of information or
                  financial products outside boominance.com official website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom-wrapper">
          <div class="container">
            <div class="footer-bottom-content d-md-flex justify-content-between">
              <div
                class="site-copyright wow fadeInUp"
                data-wow-delay=".2"
                data-wow-duration="1s"
              >
                <p>
                  &copy; 2022{' '}
                  <a href="https://easewebs.com">Boominance Pvt Ltd</a> All
                  Rights Reserved.
                </p>
              </div>
              <div
                class="social-links mt-4 mt-md-0 gray-bg wow fadeInUp"
                data-wow-delay=".5"
                data-wow-duration="1s"
              >
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
