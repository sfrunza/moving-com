import React from 'react';
import clock from '../../../../../assets/images/clock-copy.png'
import calendar from '../../../../../assets/images/calendar.png'
import ReactWOW from 'react-wow'


const StorageSection = props => {
  return (

    <div id="storage" name="storage" className='service-container'>
      <div className='service-header'>
        <h3 className='service-header-title'>Storage Solutions</h3>
        <p className='service-header-subtitle'>Move with us and get First 10 Days FREE Storage. Valid September through May.</p>
      </div>

      <ReactWOW animation='fadeInUp' duration="1.5s">
      <div className="storage-rate-container">
        <div className="storage-service">
          <div className="long-term">
            <h4>Up to 6 months storage</h4>
            <p><span>Insight Moving</span> provides clean, dry, climate and temperature controlled storage for up to 6 months.</p>
            <div className="storage-rates">
              <div>
                <p className="size-move">Room or less</p>
                <span className="rate-mo">$100/mo</span>
              </div>
              <div>
                <p className="size-move">Studio apt</p>
                <span className="rate-mo">$150/mo</span>
              </div>
              <div>
                <p className="size-move">1 Bedroom apt</p>
                <span className="rate-mo">$200/mo</span>
              </div>
            </div>
            <img src={calendar} />
            <h3>10 Days FREE Storage</h3>

          </div>
        </div>
        <div className="storage-service">
          <div className="overnight">
            <h4>Overnight Storage</h4>
            <p>In case you have to move out in one day, but are not able to move into your new residence until the next day, we offer low cost Overnight On-Truck Storage.</p>
            <p className="overnight-fee">WE COLLECT $100 FOR KEEPING YOUR ITEMS OVERNIGHT.</p>
            <p><span>The truck remains locked and stationary in our digitally monitored parking lot.</span></p>
            <img src={clock} />
          </div>
        </div>
      </div>
      </ReactWOW>


    </div>

  )
}

export default StorageSection;
