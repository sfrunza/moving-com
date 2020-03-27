import React from 'react';
import ReactWOW from 'react-wow'

const PricesLanding = props => {
  return (
    <div className='insight-landing-rates'>
        <div className="insight-landing-rates-body">
          <div className='x-grid'>
            <ReactWOW animation='fadeInUp' duration="1.5s">
            <div className="rate-container insight-landing-rates-hourly">
              <h3 className="rate-header">Local Hourly Rates</h3>
              <h6 className="rate-body">Within Boston & surrounding 125 miles.</h6>
              <a href="/pricing#local-rates" className="link-to-prices">View all Pricing Plans</a>
              <i className="fas fa-chevron-right" style={{fontSize: "12px", margin: "0px 6px", color: "#7e46ea"}}></i>
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

            </div>

            <div className="rate-container insight-landing-rates-flat">
              <h3 className="rate-header">Flat Rate Moving</h3>
              <h6 className="rate-body">House Flat Rate Moving is available upon request.</h6>
              <a href="/pricing#long-distance-rates" className="link-to-prices">View Flat Rates</a>
              <i className="fas fa-chevron-right" style={{fontSize: "12px", margin: "0px 6px", color: "#7e46ea"}}></i>
              <div className="flat-rates">
                <label>New York<span className="two-way-arrow"></span>Boston</label>
                <span className="pricing-rate">
                  <span className="pricing-term" style={{marginRight: "3%", position: "relative", bottom: "9px"}}>from</span>
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">950</span>
                </span>
              </div>

            </div>
            </ReactWOW>
          </div>
        </div>
    </div>

  )
}

export default PricesLanding;
