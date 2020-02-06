import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../../../assets/images/logo.jpg'

class NavigationBar extends Component {
  render() {

    return (
      <Navbar  bg="white" expand="lg" collapseOnSelect fixed="top">
        <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            InsightMovingCo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link className='nav-link' href="/">Home</Nav.Link>
            <Nav.Link className='nav-link' href="/prices">Prices</Nav.Link>
            <Nav.Link className='nav-link' href="/services">Services</Nav.Link>
            <Nav.Link className='nav-link' href="/gallery">Gallery</Nav.Link>
            <Nav.Link className='nav-link' href="/client-login">Client Login</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/#">
            <Button variant="primary" className="navbar-button">Request </Button>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
