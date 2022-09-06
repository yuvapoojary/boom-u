import React from 'react'
class Process extends React.Component {
  render() {
    return (
      <>
        <section class='content-block theme-bg section-padding fw500'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-lg-5 pe-lg-0 col-12'>
                <div class='mobile-block'>
                  <img src='img/home3/mobile-block.png' alt='' />
                </div>
              </div>
              <div class='col-lg-6 mt-5 mt-lg-0 offset-lg-1 col-12 ps-lg-5 pe-lg-5'>
                <div class='block-contents ms-xl-3'>
                  <div
                    class='section-title mb-4 wow fadeInUp'
                    data-wow-duration='1s'
                    data-wow-delay='.1s'
                  >
                    <h2>Simple &amp; effortless process</h2>
                  </div>
                  <p
                    class='wow fadeInUp'
                    data-wow-duration='1s'
                    data-wow-delay='.3s'
                  >
                    You can easily buy a stock recommendation in three simple
                    steps.
                  </p>
                </div>
                <div class='step-features'>
                  <div
                    class='single-featured-item item1 wow fadeInUp'
                    data-wow-delay='.3s'
                  >
                    <h4>Get Registered with the platfrom</h4>
                    <p>You can easily register with Boominance</p>
                  </div>
                  <div
                    class='single-featured-item item2 wow fadeInUp'
                    data-wow-delay='.5s'
                  >
                    <h4>Select the recoommendation type</h4>
                    <p>
                      You can buy general recommendation or a detailed report as
                      you like
                    </p>
                  </div>
                  <div
                    class='single-featured-item item3 wow fadeInUp'
                    data-wow-delay='.7s'
                  >
                    <h4>Pay and Apply</h4>
                    <p>
                      Pay for the recommendation and Apply same in your stock
                      portfolio to earn profits
                    </p>
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

export default Process
