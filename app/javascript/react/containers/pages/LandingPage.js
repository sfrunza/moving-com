import React from 'react';
import Header from '../../components/Header/Header'
import Calculator from '../../components/Calculator/Calculator'
import ServicesLanding from '../../containers/sections/LandingPageSections/ServicesLanding/ServicesLanding'
import ReviewsLanding from '../../containers/sections/LandingPageSections/ReviewsLanding/ReviewsLanding'
import PricesLanding from '../../containers/sections/LandingPageSections/PricesLanding/PricesLanding'
import ReactWOW from 'react-wow'

const LandingPage = props => {

  return (
    <div id="insight-landing-page">
      <Header classNameIntro="insight-landing-intro" classNameCover="insight-landing-cover" headerTitle="A Badass Moving Company in Boston." headerSubtitle="Every move includes professional furniture protection at no extra charge" />

      <ReactWOW animation='fadeInDown' duration="2s" delay="1s">
      <div id="full-quote" className="full-quote">
        <div className="calc-container">
          <div className="quote-background">
            <Calculator />
          </div>
        </div>
      </div>
      </ReactWOW>

      <PricesLanding />
      <ServicesLanding />
      <ReviewsLanding />
    </div>
  )
}

export default LandingPage;
