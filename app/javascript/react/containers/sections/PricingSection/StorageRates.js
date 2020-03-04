import React from 'react';
import clock from '../../../../../assets/images/clock-copy.png'
import calendar from '../../../../../assets/images/calendar.png'


const StorageRates = props => {
  return (

    <div id="storage-rates" className='service-container'>
      <div className='service-header'>
        <h3 className='service-header-title'>Storage Pricing</h3>
        <p className='service-header-subtitle'>Storage pricing varies based on size of inventory, duration of storage, and season.</p>
      </div>
      <div className="storage-rate-container">
        <div className="storage-service">
          <div className="long-term">
            <h4>Up to 6 months storage</h4>
            <p><span>Insight Moving</span> provides clean, dry, climate and temperature controlled storage for up to 6 months.</p>
            <div className="storage-rates">
              <div>
                <p className="size-move">Room</p>
                <span className="rate-mo">$100/mo</span>
              </div>
              <div>
                <p className="size-move">Studio</p>
                <span className="rate-mo">$150/mo</span>
              </div>
              <div>
                <p className="size-move">1 Bedroom</p>
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
    </div>

  )
}

export default StorageRates;
