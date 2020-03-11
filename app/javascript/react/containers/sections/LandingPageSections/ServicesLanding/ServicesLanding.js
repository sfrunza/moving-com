import React from 'react';

const ServicesLanding = props => {
  return (
    <div className='insight-landing-services'>
      <div className='insight-landing-services-header'>
        <h3>Complete solutions for your moving needs.</h3>
        <p className='insight-landing-services-header-subtitle'>SELECT THE SERVICE YOU NEED TO LEARN MORE.</p>
      </div>

        <div className='four-services'>
          <div className="container">


            <div className='four-services-div'>

              <div className='service-wrapper one'>
                <div className="service-list w-dyn-items">
                  <div className="service-item w-dyn-item">
                    <a href="/services#local" className="service-image w-inline-block"> <img src="https://www.movesforseniors.com/wp-content/uploads/2018/05/senior-facilitation_small.jpg" /></a>
                    <div className="service-data">
                      <a href="/services#local" className="service-title-link w-inline-block">
                        <h4 className="h4-heading">Local Moving</h4>
                      </a>
                      <p className="paragraph small">Hourly based full moving services in Metro Boston and 125 miles around it.</p>
                      <div className="benefit">
                        <img src="https://uploads-ssl.webflow.com/5d5a497d83100b4a7107c6a2/5d5c4ab8f8e0fceb33ca47bb_icon-greencheckmark.svg" alt="icon-greencheckmark" className="benefit-icon" />
                        <div className="benefit-text">Safe, Fast and Reliable</div>
                      </div>
                      <div className="button-spacer">
                        <a href="/services#local" className="button black w-button">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='service-wrapper two'>
                <div className="service-list w-dyn-items">
                  <div className="service-item w-dyn-item">
                    <a href="/services#interstate" className="service-image w-inline-block">
                    <img src="https://vanexpressnj.com/wp-content/uploads/2019/10/road-signs-936137_640.jpg" />
                    </a>
                    <div className="service-data">
                      <a href="/services#interstate" className="service-title-link w-inline-block">
                        <h4 className="h4-heading">Interstate Moving</h4>
                      </a>
                      <p className="paragraph small">Flat Rate Moving. Same or Next Day moving services on distance up to 1,500 miles.</p>
                      <div className="benefit">
                        <img src="https://uploads-ssl.webflow.com/5d5a497d83100b4a7107c6a2/5d5c4ab8f8e0fceb33ca47bb_icon-greencheckmark.svg" alt="icon-greencheckmark" className="benefit-icon" />
                        <div className="benefit-text">Flat Rate Moving</div>
                      </div>
                      <div className="button-spacer">
                        <a href="/services#interstate" className="button black w-button">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='service-wrapper three'>
                <div className="service-list w-dyn-items">
                  <div className="service-item w-dyn-item">
                    <a href="/services#packing" className="service-image w-inline-block">
                    <img src="https://www.thespruce.com/thmb/iiNTHSJr7-cMwIcbVryPdMKDuXI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/moving_boxes-168274883-5908e7473df78c928394d7c2.jpg" />
                    </a>
                    <div className="service-data">
                      <a href="/services#packing" className="service-title-link w-inline-block">
                        <h4 className="h4-heading">Packing Services</h4>
                      </a>
                      <p className="paragraph small">Our experienced movers will have all necessary packing materials to pack up everything. </p>
                      <div className="benefit">
                        <img src="https://uploads-ssl.webflow.com/5d5a497d83100b4a7107c6a2/5d5c4ab8f8e0fceb33ca47bb_icon-greencheckmark.svg" alt="icon-greencheckmark" className="benefit-icon" />
                        <div className="benefit-text">Full Home Packing Services</div>
                      </div>
                      <div className="button-spacer">
                        <a href="/services#packing" className="button black w-button">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='service-wrapper four'>
                <div className="service-list w-dyn-items">
                  <div className="service-item w-dyn-item">
                    <a href="/services#storage" className="service-image w-inline-block">
                    <img src="https://uploads.website.storedge.com/a0756a77-5ab9-4c50-b715-fd5a68030d77/storagemart-1750-maryland-route-3-south-lane-gambrills-storage-unit.jpg" />
                    </a>
                    <div className="service-data">
                      <a href="/services#storage" className="service-title-link w-inline-block">
                        <h4 className="h4-heading">Storage Solutions</h4>
                      </a>
                      <p className="paragraph small">Insight Moving provides climate controlled storage for up to 6 months.</p>
                      <div className="benefit">
                        <img src="https://uploads-ssl.webflow.com/5d5a497d83100b4a7107c6a2/5d5c4ab8f8e0fceb33ca47bb_icon-greencheckmark.svg" alt="icon-greencheckmark" className="benefit-icon" />
                        <div className="benefit-text">First 10 Days FREE Storage</div>
                      </div>
                      <div className="button-spacer">
                        <a href="/services#storage" className="button black w-button">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ServicesLanding;
