import React from 'react';
import logo from '../../../../assets/images/logo.jpg'

const Footer = props => {

  return (
    <div id="insight-footer">

      <div className="x-container">
        <div className="x-grid">
        <div className="x-col-2_md-12">
          <div className="insight-footer-insight">
            <a href="/"><img src={logo}/></a>
          </div>
        </div>
          <div className="x-col-2_md-12">
            <p><strong style={{fontWeight: "700"}}>Services</strong></p>
            <ul role="navigation">
              <li>
                <a href="/services#local" title="local moving"><span>local moving</span></a>
              </li>
              <li>
                <a href="/services#interstate" title="interstate moving" rel="noopener noreferrer"><span>interstate moving</span></a>
              </li>
              <li>
                <a href="/services#storage" title="storage"><span>storage</span></a>
              </li>
              <li><a href="/services#packing" title="packing" data-prefetch="" className=""><span>packing</span></a>
              </li>
            </ul>
          </div>
          <div className="x-col-2_md-12">
            <p><strong>Company</strong></p>
            <ul role="navigation">
              <li><a href="/gallery" title="gallery" data-prefetch="" className=""><span>gallery</span></a>
              </li>
              <li><a href="/pricing" title="pricing" data-prefetch="" className=""><span>pricing</span></a>
              </li>
              <li><a href="#" title="Terms of Service" target="_blank" data-prefetch="" className=""><span>TERMS OF SERVICE</span></a></li>
              <li><a href="#" title="Discord" target="_blank" rel="noopener noreferrer"><span>PRIVACY POLICY</span></a></li>
            </ul>
          </div>
          <div className="x-col-2_md-12">
            <p><strong>Social Links Placeholder</strong></p>
            <ul role="navigation">
              <li><a href="mailto: info@insightmoving.com" title="Jobs" data-prefetch="" className=""><span>info@insightmoving.com</span></a>
              </li>
            </ul>
          </div>
        </div>

      </div>


      <div className="insight-footer-tagline">
        <p><span>Make moving chill.</span><span className="insight-footer-tagline-copyright">© 2020</span><a href="#" target="_blank" rel="noopener noreferrer">Privacy</a><a href="#" target="_blank" rel="noopener noreferrer">Terms</a></p>

      </div>


    </div>
  )
}

export default Footer;
