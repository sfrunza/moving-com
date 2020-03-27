import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../../../assets/images/logo.jpg'
import { Collapse } from 'reactstrap';

const NavigationBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


  if(!collapsed){

    return (
      <Navbar  bg="white" expand="lg" collapseOnSelect fixed="top">
      <div className="nav-width" >
        <Navbar.Brand >
        <Link to='/' className="navbar-brand">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <h4 className="logo-name">InsightMovingCo</h4>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto">
            <Link className='nav-link' to="/" onClick={toggleNavbar}>Home</Link>
            <Link className='nav-link' to="/pricing" onClick={toggleNavbar}>Pricing</Link>
            <Link className='nav-link' to="/services" onClick={toggleNavbar}>Services</Link>
            <Link className='nav-link' to="/gallery" onClick={toggleNavbar}>Gallery</Link>
            <Link className='nav-link' to="/client-login" onClick={toggleNavbar}><i className="fas fa-user" style={{marginRight: "5px"}}></i>Client Login</Link>
          </Nav>

          <Nav className="nav-button">
            <Nav.Link eventKey={2} href="/#">
            <Button variant="primary" className="navbar-button">Book Us Now </Button>
            </Nav.Link>
          </Nav>
        </Collapse>
      </div>
      </Navbar>
    );
  } else {
    return (
      <Navbar  bg="white" expand="lg" collapseOnSelect fixed="top">
      <div className="nav-width">
        <Navbar.Brand >
        <Link to='/'>
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <h4 className="logo-name">InsightMovingCo</h4>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/pricing">Pricing</Link>
            <Link className='nav-link' to="/services">Services</Link>
            <Link className='nav-link' to="/gallery">Gallery</Link>
            <Link className='nav-link' to="/client-login"><i className="fas fa-user" style={{marginRight: "5px"}}></i>Client Login</Link>
          </Nav>

          <Nav className="nav-button">
            <Nav.Link eventKey={4} href="/#">
              <Button variant="primary" className="navbar-button">Book Us Now </Button>
            </Nav.Link>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
    );

  }
}

export default NavigationBar;
