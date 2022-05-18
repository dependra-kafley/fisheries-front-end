import React from 'react';
import { Container,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import './base.css'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const CustomNavBar = () => {
    
    return <div className='globalnav-bg'>
        <div className='container'>
       <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand to="/">Fisheries</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav text-white">
    <Nav className="me-auto text-white">
      <NavLink to="/"  >Home</NavLink>
      <NavLink to="/scheme" >Schemes</NavLink>
      <NavLink to="/about" >About</NavLink>

    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    </div>;
}

CustomNavBar.propTypes = propTypes;
CustomNavBar.defaultProps = defaultProps;
// #endregion

export default CustomNavBar;