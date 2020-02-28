import React from 'react';
import logo from '../../../../../../assets/images/logoo.png'

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
          <div className="insight-landing-reviews-logos">
          <a href="https://www.bbb.org/" target="_blank" className="insight-landing-reviews-logo">
            <img src={logo} />
          </a>
          <a href="https://www.unpakt.com/" target="_blank" className="insight-landing-reviews-logo">
            <img src="https://images.squarespace-cdn.com/content/v1/58506d75bebafb204567ee2b/1532019240719-G1TR7ISA13WHB4018E2Z/ke17ZwdGBToddI8pDm48kBsbZsMgg-dktGTovyNsLKAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkSa6ap0rgij5RlYTDiaMHvpBO_0JwiSjdOJHTnI-xARMW9u6oXQZQicHHG1WEE6fg/ya.jpg?format=1500w" />
          </a>
          <a href="https://www.trustpilot.com/" target="_blank" className="insight-landing-reviews-logo">
            <img src="https://abts3-8d9d.kxcdn.com/wp-content/uploads/2018/02/12080740/Trustpilot-logo.jpg" />
          </a>
          <a href="https://www.yelp.com/" target="_blank" className="insight-landing-reviews-logo">
            <img src="https://www.pngitem.com/pimgs/m/109-1098173_transparent-yelp-logo-hd-png-download.png" />
          </a>
          <a href="https://www.google.com/" target="_blank" className="insight-landing-reviews-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4bxNXJcKHJ-lSrj7fx139rhBaP5cAYgdSNPcJtou1E0TIi0_v" />
          </a>
          <a href="https://www.thumbtack.com/" target="_blank" className="insight-landing-reviews-logo">
            <img src="https://www.thumbtack.com/pro-center/wp-content/uploads/2017/05/thumbtack-logo-featured.png" />
          </a></div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsLanding;
