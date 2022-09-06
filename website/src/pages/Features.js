import React from 'react'

class Features extends React.Component {
  render() {
    return (
      <>
        <div class='page-banner-wrap bg-cover text-capitalize'>
          <div class='container'>
            <div class='row'>
              <div class='col-12 col-lg-6 offset-lg-3 text-center text-white'>
                <div class='page-heading'>
                  <h1>Our Features</h1>
                  <p class='ps-lg-5 pe-lg-5'>
                    We work to create some of the most attractive and meaningful
                    trades for beginer Trader.
                  </p>
                </div>
                <div class='breadcrumb-wrapper'>
                  <nav>
                    <ol class='breadcrumb'>
                      <li class='breadcrumb-item'>
                        <a href='/'>Home</a>
                      </li>
                      <li class='breadcrumb-item active' aria-current='page'>
                        Features
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div class='page-banner-shape'>
              <img src='img/banner-shape.png' alt='' />
            </div>
          </div>
        </div>

        <section class='services-wrapper fix section-padding'>
          <div class='container'>
            <div class='col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center'>
              <div class='block-contents'>
                <div class='section-title wow fadeInUp' data-wow-duration='1s'>
                  <h2>Awesome Features grow your Portfolio value</h2>
                  <p>
                    Boominance is a simple trading Recommendation platform that
                    allows you to online easily with expert recommendations
                  </p>
                </div>
              </div>
            </div>

            <div class='row text-center text-lg-start'>
              <div class='col-md-6 col-xl-4 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/block-chain.svg' alt='' />
                  </div>
                  <div class='content'>
                    <h4>Automated Reports</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use as their default model
                    </p>
                    <a href='services-details.html'>
                      View Details <i class='icon-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-xl-4 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/mukut.svg' alt='' />
                  </div>
                  <div class='content'>
                    <h4>User Journey Flow</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use as their default model
                    </p>
                    <a href='services-details.html'>
                      View Details <i class='icon-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-xl-4 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/secure.svg' alt='' />
                  </div>
                  <div class='content'>
                    <h4>Management &amp; Security</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use as their default model
                    </p>
                    <a href='services-details.html'>
                      View Details <i class='icon-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-xl-4 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/marketing.svg' alt='' />
                  </div>
                  <div class='content'>
                    <h4>Digital Marketing</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use as their default model
                    </p>
                    <a href='services-details.html'>
                      View Details <i class='icon-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-xl-4 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/display.svg' alt='' />
                  </div>
                  <div class='content'>
                    <h4>Reporting &amp; Analysis</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use as their default model
                    </p>
                    <a href='services-details.html'>
                      View Details <i class='icon-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-xl-4 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/micro.svg' alt='' />
                  </div>
                  <div class='content'>
                    <h4>Wireframe Creation</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use as their default model
                    </p>
                    <a href='services-details.html'>
                      View Details <i class='icon-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='faq-video-block section-padding'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-xl-6 pe-xl-5 col-12'>
                <div
                  class='faq-video-wrapper me-xl-4 d-flex justify-content-center align-items-center bg-cover bg-center'
                  style={{ backgroundImage: "url('img/faq-video-bg.jpg')" }}
                >
                  <div class='video-play-btn'>
                    <a
                      href='https://www.youtube.com/watch?v=E1xkXZs0cAQ'
                      class='popup-video play-video'
                    >
                      <i class='fas fa-play'></i>
                    </a>
                  </div>
                  <div class='arrow-icon'>
                    <img src='img/icons/video-arrow.svg' alt='' />
                  </div>
                </div>
              </div>
              <div class='col-xl-6 ps-xl-5 col-12 mt-xl-0 mt-5'>
                <div class='block-contents ms-xl-4'>
                  <div
                    class='section-title wow fadeInUp'
                    data-wow-duration='1s'
                    data-wow-delay='.2s'
                  >
                    <h2>If you want to know anything, ask us</h2>
                  </div>
                </div>
                <div class='faq-accordion ms-xl-4 me-xl-4'>
                  <div class='accordion' id='mainaccordion'>
                    <div
                      class='accordion-item wow fadeInUp'
                      data-wow-duration='1s'
                      data-wow-delay='.3s'
                    >
                      <h4 class='accordion-header'>
                        <button
                          class='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#faqask1'
                          aria-expanded='false'
                          aria-controls='faqask1'
                        >
                          Is it safe to invest in cryptocurrency?
                        </button>
                      </h4>
                      <div
                        id='faqask1'
                        class='accordion-collapse collapse show'
                        data-bs-parent='#mainaccordion'
                      >
                        <div class='accordion-body'>
                          Cryptocurrency is a good investment if you want to
                          gain direct exposure to the demand for digital
                          currency.
                        </div>
                      </div>
                    </div>

                    <div
                      class='accordion-item wow fadeInUp'
                      data-wow-duration='1.1s'
                      data-wow-delay='.6s'
                    >
                      <h4 class='accordion-header'>
                        <button
                          class='accordion-button'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#faqask2'
                          aria-expanded='true'
                          aria-controls='faqask2'
                        >
                          How many altcoins are there?
                        </button>
                      </h4>
                      <div
                        id='faqask2'
                        class='accordion-collapse collapse'
                        data-bs-parent='#mainaccordion'
                      >
                        <div class='accordion-body'>
                          Cryptocurrency is a good investment if you want to
                          gain direct exposure to the demand for digital
                          currency.
                        </div>
                      </div>
                    </div>

                    <div
                      class='accordion-item wow fadeInUp'
                      data-wow-duration='1.1s'
                      data-wow-delay='.9s'
                    >
                      <h4 class='accordion-header'>
                        <button
                          class='accordion-button'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#faqask3'
                          aria-expanded='false'
                          aria-controls='faqask3'
                        >
                          Which cryptocurrency is offered here?
                        </button>
                      </h4>
                      <div
                        id='faqask3'
                        class='accordion-collapse collapse'
                        data-bs-parent='#mainaccordion'
                      >
                        <div class='accordion-body'>
                          Cryptocurrency is a good investment if you want to
                          gain direct exposure to the demand for digital
                          currency.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class='faq-bottom ms-xl-4 mt-4 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='.9s'
                >
                  <span>Still have questions?</span>
                  <a href='contact.html'>Get in touch</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Features
