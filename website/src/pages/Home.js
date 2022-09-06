import React from 'react';
import CTA from '../components/Cta';
import FAQS from '../components/Faqs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

class Home extends React.Component {
  render() {
    const style = {
      fontSize: 60,
    };
    return (
      <div>
        <section class="hero-welcome-wrapper hero-3 fw500">
          <div class="single-slide">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-5 col-12 text-xl-start mt-5 mt-xl-0 text-center order-2 order-xl-1">
                  <div class="">
                    <img src="img/home2/interface.png" alt="" />
                  </div>
                </div>
                <div class="col-xl-7 ps-xl-5 text-center text-xl-start col-12 order-1 order-xl-2">
                  <div class="hero-contents">
                    <h1 style={style}>
                      Stocks &amp; Cryptos, get the quickest advice from the
                      experts
                    </h1>
                    <p>
                      To invest and to trade. Get the on-demand recommendations.
                      Save your time for research while saving your money for
                      investing.
                    </p>

                    <div class="client-feedback-wrapper">
                      <div class="client-faces">
                        <div
                          class="single-face bg-cover"
                          style={{ backgroundImage: "url('img/user/1.png')" }}
                        ></div>
                        <div
                          class="single-face bg-cover"
                          style={{ backgroundImage: "url('img/user/2.png')" }}
                        ></div>
                        <div
                          class="single-face bg-cover"
                          style={{ backgroundImage: "url('img/user/3.png')" }}
                        ></div>
                        <div
                          class="single-face bg-cover"
                          style={{ backgroundImage: "url('img/user/4.png')" }}
                        ></div>
                        <div
                          class="single-face bg-cover"
                          style={{ backgroundImage: "url('img/user/5.png')" }}
                        ></div>
                      </div>
                      <h6>Satisfied global clients</h6>
                      <div class="rating">
                        <span class="icon-star"></span> 4.5 Global rating
                      </div>
                      <div class="hero-arrow">
                        <img src="img/home3/hero-arrow.png" alt="" />
                      </div>
                      <a href="/buyer/sign-up" class="theme-btn bg-color">
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="strong-services-wrapper section-bg section-padding fw500">
          <div class="container">
            <div class="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
              <div class="block-contents">
                <div class="section-title wow fadeInUp" data-wow-duration="1s">
                  <h2>Make your investment decisions simple and easy</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-xl-3">
                <div class="strong-service-card card1">
                  <div class="icon">
                    <img src="img/deadline.png" width={64}></img>
                  </div>
                  <div class="service-title">
                    <h3>Fast and quick</h3>
                    <p class="text-white">
                      Spend a lot of time researching to decide where to invest
                      and when to trade. Say no more. Get the quickest
                      recommendations from the experts
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-3">
                <div class="strong-service-card card2">
                  <div class="icon">
                    <img src="img/analysis.png" width={32}></img>
                  </div>
                  <div class="service-title">
                    <h3>Fair analysis by analysts</h3>
                    <p class="text-white">
                      Get unbiased recommendations from different individual
                      analysts
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-3">
                <div class="strong-service-card card3">
                  <div class="icon">
                    <img src="img/choose.png" width={32}></img>
                  </div>
                  <div class="service-title">
                    <h3>Make your choice</h3>
                    <p class="text-white">
                      Choose the type of recommendations you need, just as you
                      choose the analyst to provide them
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-3">
                <div class="strong-service-card card4">
                  <div class="icon">
                    <img src="img/payment-method.png" width={32}></img>
                  </div>
                  <div class="service-title">
                    <h3>Pay Per Recommendation (PPR)</h3>
                    <p class="text-white">
                      Pay low and only for what you consume. Avoid paying for
                      what you don't and never consume
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="content-block style-2 section-padding fw500">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-5 pe-xl-0">
                <div class="block-img">
                  <img src="img/depress.svg" alt="" />
                </div>
              </div>
              <div class="col-xl-6 mt-5 mt-xl-0 offset-xl-1 ps-xl-5">
                <div class="block-contents">
                  <div
                    class="section-title mb-4 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  >
                    <h2>Know why you are not making it</h2>
                  </div>
                  <p
                    class="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    Beginner investors are confused by factors like poor
                    research, failing to understand market dynamics, and blindly
                    following media or hype. This leads them to make the wrong
                    decision or not take the initiative.
                  </p>
                  <ul class="checked-list bg-checked">
                    <li class="wow fadeInUp" data-wow-delay=".5s">
                      Beginner inverstors more then 80% research or +8 hours in
                      a week
                    </li>
                    <li class="wow fadeInUp" data-wow-delay=".7s">
                      Majority of young people casually browse about investing
                      and trading across many online platforms.
                    </li>
                    <li class="wow fadeInUp" data-wow-delay=".7s">
                      But still, struggle to grasp the know-how or do not
                      understand the jargons.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="content-block section-padding style-2 section-bg-2 fw500">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-5 mt-5 mt-xl-0 order-2 order-xl-1">
                <div class="block-contents">
                  <div
                    class="section-title mb-4 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  >
                    <h2>Know how experts do it</h2>
                  </div>
                  <p
                    class="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    Fundamental analysts spend from weeks to a month researching
                    a single stock, and use 3-4 different tools while preparing
                    four types of documents. They should also know the company,
                    industry and macroeconomic environment.
                  </p>
                </div>
              </div>
              <div class="col-xl-5 offset-xl-2 ps-xl-0 order-1 order-xl-2">
                <div class="block-img">
                  <img src="img/experts.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="content-block style-2 section-padding fw500">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-5 pe-xl-0">
                <div class="block-img">
                  <img src="img/stock.svg" alt="" />
                </div>
              </div>
              <div class="col-xl-6 mt-5 mt-xl-0 offset-xl-1 ps-xl-5">
                <div class="block-contents">
                  <div
                    class="section-title mb-4 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  >
                    <h2>Technical trading is more than you think</h2>
                  </div>
                  <p
                    class="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    Technical analysts watches 5 different patterns, uses
                    10indicators and 9 different tools, and masters stock market
                    psychology on a repetitive basis for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="content-block section-padding style-2 section-bg-2 fw500">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-5 mt-5 mt-xl-0 order-2 order-xl-1">
                <div class="block-contents">
                  <div
                    class="section-title mb-4 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  >
                    <h2>Cryptocurrencies are not speculative</h2>
                  </div>
                  <p
                    class="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    Cryptocurrency analysts study 3 different metrics For
                    fundamental analysis and 8 different indicators For
                    technical analysis and have an in-depth understanding of
                    technical know-how. Only then measures the price patterns.
                  </p>
                </div>
              </div>
              <div class="col-xl-5 offset-xl-2 ps-xl-0 order-1 order-xl-2">
                <div class="block-img">
                  <img src="img/crypto.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Process />
        <Testimonials />
        <FAQS />
        <CTA />
      </div>
    );
  }
}

export default Home;
