import React from 'react'

class RefundPolicy extends React.Component {
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
                <div class='col-xl-12  text-center  col-12 '>
                  <div class='hero-contents'>
                    <h1 style={style}>Refund Policy</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='promo-content-block fix section-padding section-bg'>
          <div class='container'>
            <div class='row'>
              <p>
                This Refund and Cancelation Policy forms part of and must be
                read in conjunction with, the website Terms and Conditions. We
                reserve the right to change this Refund and Cancelation Policy
                at any time.
              </p>

              <h3>REFUND POLICY</h3>
              <p>
                At boominance.com, as we are selling downloadable digital
                products, therefore, no refunds shall be applicable.
              </p>
              <p>
                However, the buyer of the digital products can claim for refund
                only in following conditions:
              </p>
              <ol>
                <li>
                  If the purchased digital product is not visible, downloadable
                  to the buyer due to technical/server issues. The buyer can
                  claim only for refund (no return nor exchange) if the buyer is
                  reported to the website’s support system within 60 minutes of
                  the purchase.
                </li>
                <li>
                  If the purchased digital products are mismatched from the
                  order of the buyers, the buyer can claim for refund only by
                  provide precise information of such incident to the website’s
                  support system within 60 minutes of the purchase.
                </li>
              </ol>
              <p>
                Further, in a determination to accomplish user satisfaction, you
                can contact us for any other issues through our email:
                info@boominance.com.
              </p>
              <p>
                We are happy to support you if there is any issue you can
                contact our back-office team for any inquiry or problem.
              </p>
              <p>
                If for any reason, our back-office staff confirm a refund. Then,
                the refund will be made at our sole discretion.
              </p>
              <h3>METHODS OF PAYMENT AND REFUND</h3>
              <p>
                We will refund your amount to the original payment method, once
                it has been processed.
              </p>
              <h3>REFUND CYCLE</h3>
              <p>
                The complete refund process normally takes about 5-15 working
                days from the date of confirmation of the refund.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default RefundPolicy
