import React from 'react'
import { Link } from 'react-router-dom'
class FAQS extends React.Component {
  render() {
    return (
      <>
        <section class='faq-ask-wrapper section-padding'>
          <div class='container'>
            <div class='col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center'>
              <div class='block-contents fw500'>
                <div class='section-title wow fadeInUp' data-wow-duration='1s'>
                  <h2>If you want to know anything, ask us</h2>
                </div>
              </div>
            </div>

            <div class='row faq-ask'>
              <div class='col-lg-6 col-12'>
                <div class='faq-accordion'>
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
                          What is this website for?
                        </button>
                      </h4>
                      <div
                        id='faqask1'
                        class='accordion-collapse collapse show'
                        data-bs-parent='#mainaccordion'
                      >
                        <div class='accordion-body'>
                          This website helps begginer investors with investing
                          and trading recommendations in stocks and
                          cryptocurrencies based on their needs.
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
                          How do I get recommendations?
                        </button>
                      </h4>
                      <div
                        id='faqask2'
                        class='accordion-collapse collapse'
                        data-bs-parent='#mainaccordion'
                      >
                        <div class='accordion-body'>
                          You can register with our website by creating an
                          account. Browse the recommendations posted by our
                          recommenders, select the recommendation you want. You
                          can then buy the recommendation and get the complete
                          information of the recommendation. Make your
                          investment decision based on the information.
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
                          What is on-demand recommendations?
                        </button>
                      </h4>
                      <div
                        id='faqask3'
                        class='accordion-collapse collapse'
                        data-bs-parent='#mainaccordion'
                      >
                        <div class='accordion-body'>
                          Whenever you are investing or trading in stocks or
                          cryptocurrencies based you need, by using our website
                          you can choose and get instant recommendations for it.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-6 col-12'>
                <div class='faq-accordion'>
                  <div class='accordion' id='faqtwo'>
                    <div
                      class='accordion-item wow fadeInUp'
                      data-wow-duration='1s'
                      data-wow-delay='.3s'
                    >
                      <h4 class='accordion-header'>
                        <button
                          class='accordion-button'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#faqask11'
                          aria-expanded='true'
                          aria-controls='faqask11'
                        >
                          What is Pay Per Recommentdation?
                        </button>
                      </h4>
                      <div
                        id='faqask11'
                        class='accordion-collapse collapse'
                        data-bs-parent='#faqtwo'
                      >
                        <div class='accordion-body'>
                          You pay low and only for the recommendation you choose
                          to get. For example, If you need and choose 1
                          recommendation, you pay for that 1 recommendation
                          only. If you need and choose 2 different types of
                          recommendations, you pay for those 2 recommendations
                          only.
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
                          data-bs-target='#faqask22'
                          aria-expanded='true'
                          aria-controls='faqask22'
                        >
                          Who are those experts?
                        </button>
                      </h4>
                      <div
                        id='faqask22'
                        class='accordion-collapse collapse'
                        data-bs-parent='#faqtwo'
                      >
                        <div class='accordion-body'>
                          They are Recommenders of different types, who are
                          certified and have years of experience in relative
                          fields. Fundamental Recommenders are those who help
                          investors with long-term investing, while technical
                          Recommenders are those who help investors with trading
                          by providing recommendations. Cryptocurrency
                          Recommenders help investors with both investing and
                          trading.
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
                          data-bs-target='#faqask33'
                          aria-expanded='false'
                          aria-controls='faqask33'
                        >
                          How accurate are these recommentdation?
                        </button>
                      </h4>
                      <div
                        id='faqask33'
                        class='accordion-collapse collapse'
                        data-bs-parent='#faqtwo'
                      >
                        <div class='accordion-body'>
                          All the analysts do their due diligence before
                          providing the recommendations. However, there are many
                          internal and external conditions applied to the
                          changes. Hence, no recommendations are accurate as of
                          such. If you are a new investor, start with long-term
                          investing. Learn to build and diversify your
                          portfolio. If you want to trade, avoid taking huge
                          margins.
                        </div>
                      </div>
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
export default FAQS
