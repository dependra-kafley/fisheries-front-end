import React from 'react';

import PropTypes from 'prop-types';
import digitalIndia from './images/digital-india.png'
import nicImage from './images/NIC.png'
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
const Footer = () => {
    return (<>
        <div className="footer-bs">
        <footer className="container">
            <div className="row">
                <div className="row col-md-7 col-sm-12 footer-nav">
                    <p className="col-md-12">Quick Links —</p>
                    <div className="col-sm-6">
                        <ul className="list">
                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/about">Contact Us</NavLink>
                            <NavLink to="/about">Help</NavLink>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <ul className="list">
                            {/* <li data-toggle="modal" data-target="#feedback-modal"><a href="javascript:void(0)">Feedback</a></li> */}
                            <li><a href="inner.html">Terms & Condition</a></li>
                            {/* <li><a href="javascript:void(0);">Privacy Policy</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-8 footer-social d-flex">
                    <div className="d-inline-block align-self-center">
                        <p className="bg-light"><img src={nicImage} alt="NIC logo" /></p>
                        <p className="bg-light mb-0"><img src={digitalIndia} alt="digital india logo" /></p>
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 footer-ns d-flex">
                    <a className="backtotop align-self-center d-flex text-center text-decoration-none text-white" title="Back to top" href="#b-accessibility">
                        <span style={{display:"none"}}>Back to top</span>
                        <span style={{fontSize: "24px"}} className="fas fa-angle-up align-self-center mx-auto"></span>
                    </a>
                </div>
            </div>
            <div className="text-center mt-5">
                Website Content Managed by <a className="text-light font-weight-bold" href="https://www.nic.in/">National Informatics Centre</a>, <a className="text-light font-weight-bold" href="https://meity.gov.in/">Ministry of Electronics and IT</a>, <a className="text-light font-weight-bold" href="https://www.india.gov.in/">Govt. of India.</a>
            </div>
        </footer>
    </div>
    </>);
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
// #endregion

export default Footer;