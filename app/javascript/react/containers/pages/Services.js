import React from 'react';
import Header from '../../components/Header/Header'
import LocalMovingSection from '../sections/ServicesSections/LocalMovingSection'
import InterstateMovingSection from '../sections/ServicesSections/InterstateMovingSection'
import PackingSection from '../sections/ServicesSections/PackingSection'
import StorageSection from '../sections/ServicesSections/StorageSection'

const Services = props => {
  return (
    <div id="insight-services-page">
      <Header classNameIntro="insight-services-intro" classNameCover="insight-services-cover" headerTitle="Moving Services" headerSubtitle="sjkndfkjsnkjdfsdnfjksdjfnk" />
      <LocalMovingSection />
      <InterstateMovingSection />
      <PackingSection />
      <StorageSection />
    </div>
  )
}

export default Services;
