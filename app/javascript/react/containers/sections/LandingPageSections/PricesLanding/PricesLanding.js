import React from 'react';

const PricesLanding = props => {
  return (
    <div className='insight-landing-rates'>
        <div className="insight-landing-rates-header">
          <h3>Clear pricing. Affordable rates.</h3>
        </div>
        <div className="insight-landing-rates-body">
          <div className='x-grid'>

            <div className="rate-container insight-landing-rates-hourly">
              <h3 className="rate-header">Local Hourly Rates</h3>
              <h6 className="rate-body">Within Boston & surrounding 125 miles.</h6>
              <div className="hourly-rates">
                <label>2 movers & Truck</label>
                <span className="pricing-rate">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">90</span>
                  <span className="pricing-term">/ hour</span>
                </span>
              </div>
              <div className="hourly-rates">
                <label>3 movers & Truck</label>
                <span className="pricing-rate">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">120</span>
                  <span className="pricing-term">/ hour</span>
                </span>
              </div>
              <a href="/prices" className="right" style={{lineHeight: "2em"}}>View all Pricing Plans »</a>
            </div>

            <div className="rate-container">
              <div className="vl"></div>
            </div>

            <div className="rate-container insight-landing-rates-flat">
              <h3 className="rate-header">Flat Rate Moving</h3>
              <h6 className="rate-body">House Flat Rate Moving is available upon request.</h6>
              <div className="flat-rates">
                <label>New York<span className="two-way-arrow"></span>Boston</label>
                <span className="pricing-rate">
                  <span className="pricing-term" style={{marginRight: "3%"}}>from</span>
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">950</span>
                </span>
              </div>
              <a href="/prices" className="right" style={{lineHeight: "2em"}}>View Flat Rates »</a>
            </div>

          </div>
        </div>
    </div>

  )
}

export default PricesLanding;
