import React from 'react';
import ReactWOW from 'react-wow'

const Header = props => {
  let classNameIntro = props.classNameIntro
  let classNameCover = props.classNameCover
  return (
    <div className={classNameIntro}>
      <div className="intro-info">
        <ReactWOW animation='fadeIn' duration="2.5s">
        <h3 className="section-title">{props.headerTitle}</h3>
        <h6 className="section-subtitle">{props.headerSubtitle}</h6>
        </ReactWOW>
      </div>
      <div className={classNameCover}></div>
    </div>

  )
}

export default Header;
