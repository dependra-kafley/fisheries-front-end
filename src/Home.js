import React from 'react';

import PropTypes from 'prop-types';
import MyCarousel from './MyCarousel';
import Cards from './Cards'


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
const Home = () => {
    return <div>
        <MyCarousel></MyCarousel>
        <Cards></Cards>

    </div>;
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;