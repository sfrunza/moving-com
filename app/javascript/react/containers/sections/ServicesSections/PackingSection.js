import React from 'react';
import ReactWOW from 'react-wow'


const PackingSection = props => {
  return (

    <div id="packing" name="packing" className='service-container'>
      <div className='service-header'>
        <h3 className='service-header-title'>Full Packing Services</h3>
        <p className='service-header-subtitle'>Let us make your move even easier with our full home packing services.</p>
      </div>

      <ReactWOW animation='fadeInUp' duration="1.5s" delay="0.5s">
      <div className="packing-section">

      <img className="img-mobile-v" src="https://canddmovingservice.com/files/2014/04/boxes-2.jpg" />

        <div className="packing-section-body">
          <div className="packing-section-body-item">
            <h4>RATES</h4>
            <p>Our packing rates are the same as our hourly rates for moving. We like to keep it simple and keep it consistent.</p>
          </div>

          <div className="packing-section-body-item">
            <h4>PACKING MATERIALS</h4>
            <p>Our experienced movers will have all necessary packing materials to pack up everything - with the utmost care - from the attic to the basement.</p>
          </div>

          <div className="packing-section-body-item">
            <h4>ESTIMATES</h4>
            <p>For all pack jobs we do require an onsite estimate so we can make sure we provide you with an accurate quote.</p>
          </div>
        </div>

        <div className="packing-section-img">
          <img src="https://www.wridgways.com.au/wp-content/uploads/2013/01/Cartons-and-packing-generic-690x690.jpg" />
        </div>

      </div>
      </ReactWOW>

    </div>

  )
}

export default PackingSection;
