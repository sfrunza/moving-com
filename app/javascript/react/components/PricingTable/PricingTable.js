import React from 'react';
import ReactWOW from 'react-wow'


const PricingTable = props => {

  return(
      <div className="pricing-container">
      <ReactWOW animation='fadeInUp' duration="1.5s">
        <div className="pricing_table ">
            <ul className="pricing_column_first col-sm" >
                <li className="pricing_header1 discount"></li>
                <li className="even"><span>2 Movers & Truck</span></li>
                <li className="even"><span>3 Movers & Truck</span></li>
                <li className="even"><span>4 Movers & Truck</span></li>
                <li className="even"><span>Additional Mover</span></li>
            </ul>

            <div className="col-sm pricing_hover_area">
                <ul className="gradient_blue ">
                    <li className="pricing_header1 discount">Discounted Rate</li>
                    <li className="odd discount" data-table="2 Movers and truck">$90 <span>/hr</span></li>
                    <li className="odd discount" data-table="3 Movers and truck">$120 <span>/hr</span></li>
                    <li className="odd discount" data-table="4 Movers and truck">$160 <span>/hr</span></li>
                    <li className="odd discount" data-table="Additional Mover">$35 <span>/hr</span></li>
                </ul>
            </div>

            <div className="col-sm pricing_hover_area">
                <ul className="gradient_green " >
                    <li className="pricing_header1 standard">Standard Rate</li>
                    <li className="odd standard" data-table="2 Movers and truck">$100 <span>/hr</span></li>
                    <li className="odd standard" data-table="3 Movers and truck">$140<span>/hr</span></li>
                    <li className="odd standard" data-table="4 Movers and truck">$180 <span>/hr</span></li>
                    <li className="odd standard" data-table="Additional Mover">$35 <span>/hr</span></li>
                </ul>
            </div>

            <div className="col-sm pricing_hover_area">
                <ul className="gradient_red ">
                    <li className="pricing_header1 pick">Peak Rate</li>
                    <li className="odd peak" data-table="2 Movers and truck">$120 <span>/hr</span></li>
                    <li className="odd peak" data-table="3 Movers and truck">$160 <span>/hr</span></li>
                    <li className="odd peak" data-table="4 Movers and truck">$200 <span>/hr</span></li>
                    <li className="odd peak" data-table="Additional Mover">$40 <span>/hr</span></li>
                </ul>
            </div>
        </div>
        <p className="section-subtitle table-subtitle"><span className="discount-span">Discounted Rate:</span> Monday - Thursday<br></br><span className="standard-span">Standard Rate:</span> Weekends, first & last week of the month<br></br><span className="peak-span">Peak Rate:</span> National holidays & peak moving days</p>
      </ReactWOW>
    </div>


  );
}

export default PricingTable;
