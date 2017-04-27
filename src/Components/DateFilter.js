import React, { Component } from 'react'; 
import Check from './Check';  
import 'react-datepicker/dist/react-datepicker.css';

import './css/DateFilter.css'; 

export default class DateFilter extends Component {
    render() {

        const {onChange, sel} = this.props; 
        return (
            <div className="date-filter-container">
                <div className="date-choice-check"><Check onChange={onChange} val={1} checked={sel == '1' ? true : false}/><label>1 Month</label></div>
                <div className="date-choice-check"><Check onChange={onChange} val={3} checked={sel == '3'  ? true : false}/><label>3 Months</label></div>
                <div className="date-choice-check"><Check onChange={onChange} val={12} checked={sel == '12' ? true : false}/><label>1 Year</label></div>
                <div className="date-choice-check"><Check onChange={onChange} val={0}  checked={sel == '0' ? true : false}/><label>Campaign Inception</label></div>
            </div>
        )
    }
}