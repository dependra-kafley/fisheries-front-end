import React from 'react';

import PropTypes from 'prop-types';
import { navigate, useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Person, UsbRounded } from '@mui/icons-material';

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
const Cards = () => {
    const navigate = useNavigate();
    return <div className="my-5" id="b-homedb">
        <div className="container">
            <div className="row text-center">
                
                <h2 className="col-md-12">Detail on Fish Farmer Registration</h2>
                <div className="col-lg-3 p-4">
                    <div className="bg-light py-4 b-dbcard">
                    <Person fontSize='large' ></Person>
                        <p><span className="fa fa-id-card text-success" style={{ fontSize: "40px" }}></span></p>
                        <h3 style={{ fontSize: "16px" }}><strong>Total Fish Farmers Registered</strong></h3>
                        <div className="text-left ">
                            <p className="px-5">Till date  <span className="float-right">4.8 lakh</span></p>

                        </div>
                        <div className="text-center">
                            {/* <a className="text-center"  href="mychart.html" className="card-link">Detail View</a> */}
                            <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="details"
                                onClick={
                                    () => {
                                        navigate("/chart");
                                    }
                                }>
                                details
                            </button>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 p-4">
                    <div className="bg-light py-4 b-dbcard">
                        <VerifiedIcon fontSize='large' className='text-success'></VerifiedIcon>
                        <p><span className="fa fa-check-square text-danger" style={{ fontSize: "40px" }}></span></p>
                        <h3 style={{ fontSize: "16px" }}><strong>Total Application Verified</strong></h3>
                        <div className="text-left ">
                            <p className="px-5">Till date  <span className="float-right">2.2 Cr</span></p>
                            <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="details"
                                onClick={
                                    () => {
                                        navigate("/chart");
                                    }
                                }
                            >
                                details
                            </button>

                        </div>
                        <div className="text-center">
                            {/* <a className="text-center"  href="mychart.html" className="card-link">Detail View</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 p-4">
                    <div className="bg-light py-4 b-dbcard">
                    <VerifiedIcon fontSize='large' className='text-warning'></VerifiedIcon>
                        <p><span className="fas fa-rupee-sign text-info" style={{ fontSize: "40px" }}></span></p>
                        <h3 style={{ fontSize: "16px" }}><strong>Application Pending</strong></h3>
                        <div className="text-left ">
                            <p className="px-5">Till date  <span className="float-right">2.6</span></p>

                        </div>
                        <div className="text-center">
                            {/* <a className="text-center"  href="mychart.html" className="card-link">Detail View</a> */}
                            <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="details">
                                details
                            </button>
                        </div>



                    </div>
                </div>
                <div className="col-lg-3 p-4">
                    <div className="bg-light py-4 b-dbcard">
                    <VerifiedIcon fontSize='large' className='text-danger'></VerifiedIcon>
                        <p><span className="fas fa-rupee-sign text-info" style={{ fontSize: "40px" }}></span></p>
                        <h3 style={{ fontSize: "16px" }}><strong>Application Rejected</strong></h3>
                        <div className="text-left">
                            <p className="px-5">Till date  <span className="float-right">2.6</span></p>

                        </div>
                        <div className="text-center">
                            {/* <a className="text-center"  href="mychart.html" className="card-link">Detail View</a> */}
                            <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="details">
                                details
                            </button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </div>;
}

Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;
// #endregion

export default Cards;