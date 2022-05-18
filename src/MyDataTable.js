import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { Button } from 'bootstrap';

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
const MyDatatable = () => {

    
const columns = [
    {
        
        name: 'District',
        selector: row => row.district,
        sortable: true
    },
    {
        
        name: 'January',
        selector: row => row.january,
        sortable: true
    },
    {
        
        name: 'February',
        selector: row => row.februrary,
        sortable: true
    },{
        
        name: 'March',
        selector: row => row.march,
        sortable: true
    },{
        
        name: 'April',
        selector: row => row.april,
        sortable: true
    },{
        
        name: 'May',
        selector: row => row.may,
        sortable: true
    },{
        
        name: 'June',
        selector: row => row.june,
        sortable: true
    },{
        
        name: 'July',
        selector: row => row.july,
        sortable: true
    },{
        
        name: 'August',
        selector: row => row.august,
        sortable: true
    },{
        
        name: 'September',
        selector: row => row.september,
        sortable: true
    },{
        
        name: 'October',
        selector: row => row.october,
        sortable: true
    },{
        
        name: 'November',
        selector: row => row.november,
        sortable: true
    },{
        
        name: 'December',
        selector: row => row.december,
        sortable: true
    },
];

const data = [
    {
        id: 1,
        district:"East Khasi Hills",
        january: 1,
        februrary:2,
        march:3,
        april:4,
        may:5,
        june:6,
        july:7,
        august:8,
        september:9,
        october:10,
        november:11,
        december:12
    },
    {
        id: 1,
        district:"West Khasi Hills",
        january: 1,
        februrary:2,
        march:3,
        april:4,
        may:5,
        june:6,
        july:7,
        august:8,
        september:9,
        october:10,
        november:11,
        december:12
    },
    {
        id: 1,
        district:"Ri Bhoi",
        january: 1,
        februrary:2,
        march:3,
        april:4,
        may:5,
        june:6,
        july:7,
        august:8,
        september:9,
        october:10,
        november:11,
        december:12
    },
    {
        id: 1,
        district:"West Garo Hills",
        january: 1,
        februrary:2,
        march:3,
        april:4,
        may:5,
        june:6,
        july:7,
        august:8,
        september:9,
        october:10,
        november:11,
        december:12
    },
    
]
    return <div className='text-center de'>
           <DataTable title="Farmer Registred Month Wise Data" columns={columns} data={data}
           
            pagination
            selectableRows 
            selectableRowsHighlight 
            highlightOnHover 
            actions ={<button  className="btn btn-primary btn-sm">Export</button>}
            subHeader
            subHeaderComponent={
                <div classname="">
                    <div className="input-group ">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" />
                            <label className="form-label" htmlFor="form1">Search</label>
                            </div >
                        <button className='btn btn-primary btn-small btn-sm'> Search </button>
                    </div>
                </div>
               
            }
            />
    </div>;
}

MyDatatable.propTypes = propTypes;
MyDatatable.defaultProps = defaultProps;
// #endregion

export default MyDatatable;