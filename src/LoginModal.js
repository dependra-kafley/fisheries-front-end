import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal,Button } from "react-bootstrap";

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
const LoginModal = () => {
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
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
    </>;
}

LoginModal.propTypes = propTypes;
LoginModal.defaultProps = defaultProps;
// #endregion

export default LoginModal;