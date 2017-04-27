import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import './css/DateFilter.css'; 

export default class DateFilter extends Component {
    render() {
        const {disabled, start, end, onChange, end_changed, start_changed} = this.props;
        return (
            <div className="custom-date-filter-container">
                <div className="custom-datepicker">
                    <label>Start date</label>
                    <div className="mock">
                        <input placeholder="DD/MM/YYYY" value={start_changed ? start.format('L') : ''}></input>
                    </div>
                    <DatePicker
                        selected={start}
                        onFocus={this.props.onFocus}
                        onChange={(e) => onChange(e, 'start')} />
                </div>
                <div className="custom-datepicker">
                    <label>End date</label>
                    <div className="mock">
                      <input placeholder="DD/MM/YYYY" value={end_changed ? end.format('L') : ''}></input>
                    </div>
                    <DatePicker
                        selected={end} 
                        onFocus={this.props.onFocus}
                        onChange={(e) => onChange(e, 'end')} />
                </div>
            </div>
        )
    }
}