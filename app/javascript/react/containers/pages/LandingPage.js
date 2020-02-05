import React from 'react';

const LandingPage = props => {

  return (
    <div id="insight-landing-page">
      <div className="insight-landing-intro">
        <div className="intro-info-landing">
          <h3 className="section-title">A Badass Moving Company in Boston.</h3>
          <h6 className="section-subtitle">Every move includes professional furniture protection at no extra charge.</h6>
        </div>
        <div className="insight-landing-cover"></div>
      </div>

      <span className="anchor" id="QQQ"></span>

      <div className='insight-landing-rates'>
        <div className='x-container'>
          <div className="insight-landing-rates-header">
            <h3>Clear pricing. Affordable rates.</h3>
          </div>
          <div className="insight-landing-rates-body">
            <div className='x-grid'>
              <div className="rate-container insight-landing-rates-hourly">
                <h3 className="rate-header">Local Hourly Rates</h3>
                <h6 className="rate-body">Within Boston & surrounding 125 miles.</h6>
              </div>
              <div className="rate-container insight-landing-rates-flat">
                <h3 className="rate-header">Flat Rate Moving</h3>
                <h6 className="rate-body">House Flat Rate Moving is available upon request.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='insight-landing-services'>
          <div className='insight-landing-services-header'>
            <h3>Complete solutions for your moving needs.</h3>
            <p className='service-header-subtitle' style={{color: "#6261b8"}}>SELECT THE SERVICE YOU NEED TO LEARN MORE.</p>
          </div>

          <div className="cards-list">
            <a className="card card-1" href="services#local">
              <div className='blog-text-darken'></div>
              <div className="card_image"> <img src="https://www.movesforseniors.com/wp-content/uploads/2018/05/senior-facilitation_small.jpg" />
              </div>
              <div className="card_title title-white">
                <p>Local Moving</p>
              </div>
            </a>

            <a className="card card-2" href="services#interstate">
            <div className='blog-text-darken'></div>
              <div className="card_image">
                <img src="https://vanexpressnj.com/wp-content/uploads/2019/10/road-signs-936137_640.jpg" />
              </div>
              <div className="card_title title-white">
                <p>Interstate</p>
              </div>
            </a>
          </div>

          <div className='cards-list'>
            <a className="card card-3" href="services#packing">
            <div className='blog-text-darken'></div>
              <div className="card_image">
                <img src="https://www.thespruce.com/thmb/iiNTHSJr7-cMwIcbVryPdMKDuXI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/moving_boxes-168274883-5908e7473df78c928394d7c2.jpg" />
              </div>
              <div className="card_title">
                <p>Packing</p>
              </div>
            </a>

            <a className="card card-4" href="services#storage">
            <div className='blog-text-darken'></div>
              <div className="card_image">
                <img src="https://uploads.website.storedge.com/a0756a77-5ab9-4c50-b715-fd5a68030d77/storagemart-1750-maryland-route-3-south-lane-gambrills-storage-unit.jpg" />
                </div>
              <div className="card_title title-black">
                <p>Storage</p>
              </div>
            </a>
            </div>
      </div>

      <div className='service-container'>
        <div className='service-header'>
          <h3 className='service-header-title'>{props.title}</h3>
          <p className='service-header-subtitle'>{props.subtitle}</p>
        </div>
      </div>

      <div className='service-container'>
        <div className='service-header'>
          <h3 className='service-header-title'>{props.title}</h3>
          <p className='service-header-subtitle'>{props.subtitle}</p>
        </div>
      </div>

    </div>
  )
}

export default LandingPage;
