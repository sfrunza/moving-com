import React from 'react';
import ServicesComponent from '../../components/ServicesComponents/ServicesComponents'

const Services = props => {
  return (
    <div id="insight-services-page">
      <div className="insight-services-intro">
        <div className="intro-info">
          <h3 className="section-title">Our Services</h3>
          <h6 className="section-subtitle">Every move includes professional furniture protection at no extra charge.</h6>
        </div>
        <div className="insight-services-cover"></div>
      </div>
      <span className="anchor" id="local"></span>


      <ServicesComponent title="Local Moving"
                        id="local"
                        name="local"
                        subtitle="Hourly based full moving services in Metro Boston and 150 miles around it." />

      <ServicesComponent title="Long Distance Interstate Moving"
                        id="interstate"
                        name="interstate"
                        subtitle="Flat Rate Moving. Gas, mileage, tolls, insurance are included. No hidden fees. Same or Next Day moving services on distance up to 1,500 miles." />

      <ServicesComponent title="Full Packing Services"
                        id="packing"
                        name="packing"
                        subtitle="Let us make your move even easier with our full home packing services." />

      <ServicesComponent title="Storage Solutions"
                        id="storage"
                        name="storage"
                        subtitle="Move with us and get First 10 Days FREE Storage. Valid September through May." />


    </div>
  )
}

export default Services;
