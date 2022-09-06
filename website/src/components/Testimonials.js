import React from 'react'
import { Link } from 'react-router-dom'
class Testimonials extends React.Component {
  render() {
    return (
      <>
        <section class='testimonial-carousel-wrapper section-bg section-padding fix'>
          <div class='container'>
            <div class='row fix align-items-center'>
              <div class='col-lg-8'>
                <div class='block-contents fw500 text-center text-lg-start'>
                  <div class='section-title'>
                    <h2 class='wow fadeInLeft' data-wow-duration='1.1s'>
                      We have powerful user experience
                    </h2>
                  </div>
                </div>
              </div>
              <div class='col-lg-4 d-none d-lg-block text-center text-lg-end'>
                <div class='testimoinial-nav style-2'>
                  <div class='testimonial-nav-prev'>
                    <i class='icon-arrow-left'></i>
                  </div>
                  <div class='testimonial-nav-next'>
                    <i class='icon-arrow-right'></i>
                  </div>
                </div>
              </div>
            </div>

            <div class='testimonial-nav-carousel-active'>
              <div class='single-testimoinal-box'>
                
                <div class='feedback'>
                  “This site has made my trading work much easier which saves me
                  a lot of time, I have become a fan of it.”
                </div>
                <div class='client-info'>
                  <div class='client-name'>
                    <h6>Ravi Shankar</h6>
                    <span>Account executive</span>
                  </div>
                </div>
              </div>
              <div class='single-testimoinal-box'>
                
                <div class='feedback'>
                  “By using expert recommendation, I can easily invest in stocks
                  ,which earns me a lot of money.”
                </div>
                <div class='client-info'>
                  <div class='client-name'>
                    <h6>Karen Lynn</h6>
                    <span>Marketing Expert</span>
                  </div>
                </div>
              </div>
              <div class='single-testimoinal-box'>
                
                <div class='feedback'>
                  “I can now complete trading work from anywhere anytime, making
                  my investments work more dynamic.”
                </div>
                <div class='client-info'>
                  <div class='client-name'>
                    <h6>Sean Jacobs</h6>
                    <span>Businessman</span>
                  </div>
                </div>
              </div>
              <div class='single-testimoinal-box'>
                
                <div class='feedback'>
                  “This site has made my trading work much easier which saves me
                  a lot of time, I have become a fan of it.”
                </div>
                <div class='client-info'>
                  <div class='client-name'>
                    <h6>Scott Swanson</h6>
                    <span>Account executive</span>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-4 d-block mt-5 mr-lg-0 d-lg-none text-center'>
              <div class='testimoinial-nav style-2'>
                <div class='testimonial-nav-prev'>
                  <i class='icon-arrow-left'></i>
                </div>
                <div class='testimonial-nav-next'>
                  <i class='icon-arrow-right'></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default Testimonials
