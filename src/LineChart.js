import React from 'react';
import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";

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
const LineChart = ({ chartData }) => {
    return <div>
        
        <>
        <p className='text-center'>
            Farmer Registered District Wise per Month
        </p>
        <Line data={chartData} ></Line>;
        </> 
        
    </div>;
}

LineChart.propTypes = propTypes;
LineChart.defaultProps = defaultProps;
// #endregion

export default LineChart;