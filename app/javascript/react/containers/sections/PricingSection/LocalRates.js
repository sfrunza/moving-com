import React from 'react';
import PricingTable from '../../../components/PricingTable/PricingTable'


const LocalRates = props => {
  return (

    <div id="local-rates" className='service-container hourly-rate'>
      <div className='service-header'>
        <h3 className='service-header-title'>Hourly Rates</h3>
        <p className='service-header-subtitle'>Our local moving and packing rates are hourly based with 15 minutes increment and a <span className="two-h-min">2 hours minimum</span> charge policy, in case your move takes less then 2 hours.</p>
      </div>
      <PricingTable />
      <p className='insight-landing-services-header-subtitle discount'>We offer 5% discount for cash payments </p>
    </div>

  )
}

export default LocalRates;
