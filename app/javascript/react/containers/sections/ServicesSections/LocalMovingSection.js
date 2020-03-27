import React from 'react';
import image from '../../../../../assets/images/moving-cover.jpg'
import ReactWOW from 'react-wow'


const LocalMovingSection = props => {
  return (

    <div id="local" name="local" className='service-container'>
      <div className='service-header'>
        <h3 className='service-header-title'>Local Moving</h3>
        <p className='service-header-subtitle'>Hourly based full moving services in Metro Boston and 150 miles around it.</p>
      </div>


      <img className="mobile-img" src={image} />
      <ReactWOW animation='fadeInUp' duration="1.5s">
      <div className="local-services-container">
        <div className="local-services-item">
          <img src="https://static1.squarespace.com/static/586174e1ff7c506c994738d2/5861f218d2b857ddbd7d08f9/5871b4ea1e5b6c9fdaa8424e/1484338685487/?format=1500w" />
          <h4>Residential</h4>
          <p>From small apartments to large houses we treat your belongings with the utmost care and safekeeping.</p>
        </div>

        <div className="local-services-item">
          <img src="https://dealerplatformnet.blob.core.windows.net/wwwblacktiemovingcom/gallery/medium/7a5beed7-00c9-4920-a7fe-c7388755925b.jpg" />
          <h4>Commercial</h4>
          <p>Office moving services and corporate relocation for busy professionals and companies as well.</p>
        </div>

        <div className="local-services-item">
          <img src="https://www.movinghelper.com/img/full-time.jpg" />
          <h4>Loading/Unloading Help</h4>
          <p>Loading and unloading help. Moving help within house, building, office or apartment or condo complex.</p>
        </div>
      </div>
      <div className="local-service-button">
        <button>Book Us Now</button>
      </div>

      </ReactWOW>

    </div>

  )
}

export default LocalMovingSection;
