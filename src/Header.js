
import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../src/images/icons/ico-site-search.png'
import socialIcon from '../src/images/icons/ico-social.png'
import iconSkip from '../src/images/icons/ico-skip.png'
import accessibilityIcon from '../src/images/icons/ico-accessibility.png'
import siteMapIcon from '../src/images/icons/ico-sitemap.png'
import emblem from '../src/images/emblem-dark.png'

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
const Header = () => {
	return <>

		{/* Emblem */}
		<div className='container'>
			<div className='row'>
				<div className="clearfix d-flex justify-content  my-3 col-6" id="b-header">
					<div className="float-left d-flex h-100">
						<img src={emblem} className="align-self-center b-emblem-image" title="National Emblem of India" alt="emblem of india logo"></img>
					</div>

					<div className="float-left d-flex h-100">
						<strong className="align-self-center pl-3 mx-3"><span>Government of Meghalya</span> <br></br><span>Fisheries Department</span></strong>
					</div>

				</div>
				<div className='col-6 d-flex justify-content-end align-self-center text-end text-uppercase pt-4'>
						<strong><em><h4>Meghalaya Fish<br/> Farmer Portal</h4></em></strong>
				</div>
			</div>

		</div>

	</>
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
// #endregion

export default Header;