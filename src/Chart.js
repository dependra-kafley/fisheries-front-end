import React from 'react';
import PropTypes from 'prop-types';
import BarChart from './BarChart'
import {UserData} from './Data'
import { useState } from 'react';
import LineChart from "./LineChart";
import MyDataTable from './MyDataTable';
import styledComponents from 'styled-components';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {UserDataLine} from './UserDataLine'


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
const Chart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((mydata) => mydata.year),
        datasets: [
          {
            label: "Farmer's  Registered",
            data: UserData.map((yourdata) => yourdata.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

      const [userDataLine, setUserDataLine] = useState({
        labels: UserDataLine.map((data) => data.district),
        datasets: [
          {
            label: "Farmer's  Registered",
            data: UserData.map((letdata) => letdata.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

    return <>
    <div >
      <div className='d-flex justify-content-center mt-5 my-5 text-color-secondary'>
        <select id="dropdown-basic-button" title="Year">
          <option value="">Year</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          
        </select>
      </div> 
      <div className="text-center mt-5">
          <h3> Total Number of Verified Farmers</h3>
      </div>
      
        <div className='container-fluid mt-5 align-items-center'>
            <div className="row">
                <div className="col-10 col-sm-10 col-md-6 col-xl-6">
                    <div style={{ width: "100%" }}>
                        <BarChart chartData={userData} />
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-6 col-xl-6">
                  <div className='d-flex align-items-center'>
                    <label className='mx-2' Htmlfor="month-select">Choose a month:</label>
                      <select name="month" id="month-select">
                          <option value="">month</option>
                          <option value="jan">jan</option>
                          <option value="feb">feb</option>
                          <option value="march">march</option>
                          <option value="april">april</option>
                          <option value="may">may</option>
                          <option value="june">june</option>
                      </select>
                  </div>
                    <div style={{ width: "100%" }}>
                        <LineChart chartData={userDataLine} />
                    </div>
                </div>
            </div>
          
            
                
        </div>
      <div className="container mx-auto p-3">
            <MyDataTable></MyDataTable>
      </div>

    </div>    
    </>;
}

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;
// #endregion

export default Chart;