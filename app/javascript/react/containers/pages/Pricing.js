import React from 'react';
import Header from '../../components/Header/Header'
import LocalRates from '../sections/PricingSection/LocalRates'
import LongDistanceRates from '../sections/PricingSection/LongDistanceRates'
import StorageRates from '../sections/PricingSection/StorageRates'
import { Link } from 'react-router-dom';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Pricing = props => {
  return (
    <div id="insight-pricing-page">
      <Header classNameIntro="insight-pricing-intro" classNameCover="insight-pricing-cover" headerTitle="Best Prices and Affordable Rates" headerSubtitle="No hidden fees or extra charges" />
      <LocalRates />
      <LongDistanceRates />
      <StorageRates />
    </div>
  )
}

export default Pricing;
