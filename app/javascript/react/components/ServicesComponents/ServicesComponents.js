import React from 'react';


const ServicesComponent = props => {
  return (

    <div id={props.id} name={props.name} className='service-container'>
      <div className='service-header'>
        <h3 className='service-header-title'>{props.title}</h3>
        <p className='service-header-subtitle'>{props.subtitle}</p>
      </div>
    </div>


  )
}




export default ServicesComponent;
