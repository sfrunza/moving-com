import React from 'react';
import ReactWOW from 'react-wow'

const InterstateMovingSection = props => {
  return (

    <div id="interstate" name="interstate" className='service-container'>
      <div className='service-header'>
        <h3 className='service-header-title'>Interstate Moving</h3>
        <p className='service-header-subtitle'>Flat Rate Moving. Gas, mileage, tolls, insurance are included. No hidden fees. Same or Next Day moving services on distance up to 1,500 miles.</p>
      </div>

      <ReactWOW animation='fadeInUp' duration="1.5s" delay="0.5s">
      <div className="long-distance-body" >
        <div className="cards">
          <div className="card-wrapper big-image">
            <img src="https://www.useastcoasttours.com/images/east-coast-map.jpg"/>
          </div>
          <div className="card-wrapper flat-prices services-section">
            <div className="card-description-service-section">
              <p>Moving from / to Boston</p>
            </div>
              <p className="flat-price-body">We offer licensed, insured, full-service interstate moves from Boston, which means the best long distance movers will come to your place, package all of your items correctly, secured and safe, load them into one of our moving trucks, deliver them to your new home, unload them, unpack them and arrange them in places.</p>
              <div className="benefit-interstate">
                <img src="https://uploads-ssl.webflow.com/5d5a497d83100b4a7107c6a2/5d5c4ab8f8e0fceb33ca47bb_icon-greencheckmark.svg" alt="icon-greencheckmark" className="benefit-icon" />
                <div className="benefit-interstate-text">Licensed</div>
                <img src="https://uploads-ssl.webflow.com/5d5a497d83100b4a7107c6a2/5d5c4ab8f8e0fceb33ca47bb_icon-greencheckmark.svg" alt="icon-greencheckmark" className="benefit-icon" />
                <div className="benefit-interstate-text">Insured</div>
              </div>
              <a className='flat-rate-link' href="/pricing#long-distance-rates">View Flat Rates »</a>
              <div className="card-buttons">
                <button>Book Us Now</button>
              </div>
          </div>
        </div>
      </div>
      </ReactWOW>

    </div>
  )
}

export default InterstateMovingSection;
