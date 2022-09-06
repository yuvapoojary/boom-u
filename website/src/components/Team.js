import React from 'react'
import { Link } from 'react-router-dom'
class Team extends React.Component {
  render() {
    return (
      <>
        <section class='cta-banner-wrapper fw500'>
          <div class='container'>
            <div class='cta-banner-white-wrap'>
              <div class='cta-banner style-3 text-white'>
                <div class='row'>
                  <div class='col-xl-6 text-center mt-5 mt-xl-0 order-2 order-xl-1'>
                    <div class='cta-mobile'>
                      <img src='img/cta-mobile.png' alt='' />
                    </div>
                  </div>
                  <div class='text-center text-xl-start col-xl-6 order-1 order-xl-2'>
                    <div class='cta-contents pe-lg-5'>
                      <h2 class='wow fadeInUp'>Ready to Save Time?</h2>
                      <p class='wow fadeInUp' data-wow-delay='.3s'>
                        Investing and Trading in digital is the future and, the
                        future is here. You are going to invest anyway, why
                        don't you do it with the help of experts.
                      </p>
                      <a
                        href='#'
                        class='theme-btn wow fadeInUp'
                        style={{ border: '1px solid black' }}
                        data-wow-delay='.6s'
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default Team
