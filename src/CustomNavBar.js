import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './base.css'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from "react-bootstrap";


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

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <div className='globalnav-bg'>
    <div className='container'>
      <Navbar collapseOnSelect expand="lg" variant="dark">
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
              <button className='btn btn-small btn-secondary' onClick={handleShow}>Login</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showModal} onHide={handleClose} className="login-form">
        <Modal.Header closeButton>
          <Modal.Title >Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="index.html" autocomplete="OFF">

            <div className="inputb">
              <label htmlFor="email">Email</label>
              <input className="forminput" type="text" id="email" placeholder='Enter your Email:'></input>
              
            </div>

            <div className="inputb">
              <label htmlFor="password">Password</label>
              <input className="forminput hide-pwd" type="password" id="password" placeholder='Enter your password'></input>
              
            </div>

            {/* <input type="submit"  value="Login"></input> */}


          </form>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose} className="loginbtn">
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} className="loginbtn">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>;
}

CustomNavBar.propTypes = propTypes;
CustomNavBar.defaultProps = defaultProps;
// #endregion

export default CustomNavBar;