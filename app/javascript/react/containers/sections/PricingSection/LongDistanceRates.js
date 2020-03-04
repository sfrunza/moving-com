import React from 'react';


const LongDistanceRates = props => {
  return (

    <div id="long-distance-rates" className='service-container interstate-rates'>
      <div className='service-header'>
        <h3 className='service-header-title'>Flat Rates</h3>
        <p className='service-header-subtitle'>Is based upon the mileage from the origin to the destination, and the cubic footage of your belongings.</p>
      </div>

      <div className="long-distance-body">
        <div className="cards">
          <div className="card-wrapper big-image">
            <img src="https://media.istockphoto.com/photos/moderate-traffic-on-the-highway-usa-picture-id1053890130?k=6&m=1053890130&s=612x612&w=0&h=KODFHvrInmzlCGAeq6vUeKs4wABwNDVf4ZZ-wUebYXc="/>
          </div>

          <div className="card-wrapper flat-prices">
            <div className="card-description">
              <p>Rates Starting Price,&nbsp;&nbsp; from / to Boston</p>
            </div>
            <ul className="card-rates">
              <li>
                <p>New York City,&nbsp;&nbsp; NY<span className="flat-amount">$950</span></p>
              </li>
              <li>
                <p>Washington DC,&nbsp;&nbsp; DC<span className="flat-amount">$1300</span></p>
              </li>
              <li>
                <p>Philadelphia,&nbsp;&nbsp; PA<span className="flat-amount">$1100</span></p>
              </li>
              <li>
                <p>Pittsburg,&nbsp;&nbsp; PA<span className="flat-amount">$950</span></p>
              </li>
              <li>
                <p>Buffalo,&nbsp;&nbsp; NY<span className="flat-amount">$950</span></p>
              </li>
              <li>
                <p>Baltimore,&nbsp;&nbsp; MD<span className="flat-amount">$1200</span></p>
              </li>
              <li>
                <p>Burlington,&nbsp;&nbsp; VT<span className="flat-amount">$900</span></p>
              </li>
              <li>
                <p>Chicago,&nbsp;&nbsp; IL<span className="flat-amount">$1200</span></p>
              </li>
              <li>
                <p>Miami,&nbsp;&nbsp; FL<span className="flat-amount">$2300</span></p>
              </li>
              <li>
                <p>Raleigh,&nbsp;&nbsp; NC<span className="flat-amount">$1900</span></p>
              </li>
              <li>
                <p>St. Louis,&nbsp;&nbsp; MO<span className="flat-amount">$2000</span></p>
              </li>
              <li>
                <p>San Francisco,&nbsp;&nbsp; CA<span className="flat-amount">$5000</span></p>
              </li>
              <li>
                <p>Atlanta,&nbsp;&nbsp; GA<span className="flat-amount">2500</span></p>
              </li>
            </ul>
            <div className="card-buttons">
              <button>Book Us Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default LongDistanceRates;
