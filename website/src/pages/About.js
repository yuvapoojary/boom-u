import React from 'react'

class About extends React.Component {
  render() {
    const style = {
      fontSize: 60,
    }
    return (
      <>
        <section class='hero-welcome-wrapper hero-3 fw500'>
          <div class='single-slide'>
            <div class='container'>
              <div class='row align-items-center'>
                <div class='col-xl-5 col-12 text-xl-start mt-5 mt-xl-0 text-center order-2 order-xl-1'>
                  <div class=''>
                    <img src='img/home2/interface.png' alt='' />
                  </div>
                </div>
                <div class='col-xl-7 ps-xl-5 text-center text-xl-start col-12 order-1 order-xl-2'>
                  <div class='hero-contents'>
                    <h1 style={style}>
                      Invest In The Right Stocks & Crypto As Beginners
                    </h1>
                    <p>
                      Beginners or young investors casually keep browsing,
                      investing, and trading across various trade platforms.
                      Yet, they fail to understand the industry jargon. Further,
                      these categories of investors may not comprehend the
                      market demand and requirements. As a result, they follow
                      the market hype, failing to get adequate returns or
                      refrain from making investments.
                    </p>
                    <p class='mt-3'>
                      Don't let your hard-earned sit idle in your bank account.
                      We will help you yield higher returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='promo-content-block fix section-padding section-bg'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-xl-6 col-12 mt-5 mt-xl-0 order-2 order-xl-1'>
                <div class='block-contents'>
                  <div class='section-title mb-4'>
                    <h3 class='wow fadeInUp'>Years of Experience</h3>
                    <p class='wow fadeInUp pt-15' data-wow-delay='.3s'>
                      Our recommenders have the knowledge and experience to make
                      recommendations for assets, solutions, and portfolio
                      allocation that are tailored to your unique objectives and
                      risk tolerance.
                    </p>
                  </div>
                  <div class='section-title mb-4'>
                    <h3 class='wow fadeInUp'>The 4-Way Approach</h3>
                    <p class='wow fadeInUp pt-15' data-wow-delay='.3s'>
                      You'll get a detailed look at your financial status by
                      preparing you for these four critical areas: essentials,
                      lifestyle, unforeseen events, and surplus.
                    </p>
                  </div>
                </div>
              </div>
              <div class='col-xl-5 offset-xl-1 order-1 order-xl-2'>
                <img src='img/about-img1.jpg' alt='' />
              </div>
            </div>
          </div>
        </section>
        <section class='services-wrapper fix section-padding'>
          <div class='container'>
            <div class='col-lg-12 ps-xl-5 pe-xl-5 col-12  text-center'>
              <div class='block-contents'>
                <div class='section-title wow fadeInUp' data-wow-duration='1s'>
                  <h2>
                    Offering The Ultimate Investment Options With Our
                    Highly-Backed Research & Innovative Products
                  </h2>
                  <p>
                    Our recommenders uphold the highest standards of risk
                    assessment and both fundamental analysis and technical
                    research while formulating our investment advising
                    strategies. Our recommenders use various tactics and
                    technologies to reduce risk and enhance earnings.
                  </p>
                  <p>
                    Our analysts spend weeks or months researching a single
                    stock and use highly-sophisticated tools to ensure that what
                    we offer to our clients is the best.
                  </p>
                  <p>
                    Our product's integrity, honesty, and remarkable performance
                    separate us.
                  </p>
                </div>
              </div>
            </div>

            <div class='row text-center text-lg-start'>
              <div class='col-md-6 col-xl-6 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/block-chain.svg' alt=''></img>
                  </div>
                  <div class='content'>
                    <h4>Comprehensive Approach</h4>
                    <p>
                      Our recommenders will have various risk appetites and
                      diverse financial goals, both long-term and short-term.
                      Our mission is to give our clients tailored financial
                      solutions that best match their needs.
                    </p>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-xl-6 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/mukut.svg' alt=''></img>
                  </div>
                  <div class='content'>
                    <h4>Pay-On-The-Go</h4>
                    <p>
                      You do not have to worry about paying a large subscription
                      fee when you choose us as your stocks and crypto
                      recommender. Whether you are buying regular stocks or
                      cryptocurrency, you pay us only for the services you use.
                    </p>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-xl-6 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/secure.svg' alt=''></img>
                  </div>
                  <div class='content'>
                    <h4>Quick Registration</h4>
                    <p>
                      No, there are no long forms or approval procedures needed
                      to have the best of our advisors. All you need is to
                      register on our site with your email address, and it's
                      done. No spam calls, no spam messages, as you do not share
                      telegram ids or mobile numbers.
                    </p>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-xl-6 col-12'>
                <div class='service-box-item'>
                  <div class='icon'>
                    <img src='img/icons/marketing.svg' alt=''></img>
                  </div>
                  <div class='content'>
                    <h4>The Best of the Best</h4>
                    <p>
                      Our cryptocurrency and stock analysts are certified and
                      have years of experience. Our fundamental analysts take
                      care of your long-term investment plans, while technical
                      analysts provide the best recommendation for trading.
                      Likewise, our cryptocurrency analysts assist you with both
                      investing and trading.
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

export default About
