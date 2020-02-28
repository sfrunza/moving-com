import React from 'react';

const Header = props => {
  let classNameIntro = props.classNameIntro
  let classNameCover = props.classNameCover
  return (
    <div className={classNameIntro}>
      <div className="intro-info">
        <h3 className="section-title">{props.headerTitle}</h3>
        <h6 className="section-subtitle">{props.headerSubtitle}</h6>
      </div>
      <div className={classNameCover}></div>
      <span className="anchor" id="local"></span>
    </div>

  )
}

export default Header;
