import React from 'react';

const ReviewsLanding = props => {
  return (
    <div className='insight-landing-reviews'>

      <div className="x-conatiner">

        <div className='insight-landing-reviews-header'>
          <h6 className='reviews-header-title-purple'>WHAT PEOPLE ARE SAYING</h6>
          <h3 className='reviews-header-title'>Hundreds of moves and thousands of miles.</h3>
        </div>

        <div className="insight-landing-reviews-tweets">
          <div className="insight-landing-reviews-tweet">
          </div>
          <div className="insight-landing-reviews-tweet">
          </div>
          <div className="insight-landing-reviews-tweet">
          </div>
        </div>

        <div className="insight-landing-reviews-footer">
          <h6 className="reviews-footer-title-purple" style={{textAlign: "center"}}>We've Been Featured In</h6>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsLanding;
