import React, { Component } from 'react';  
import './css/InlineSelect.css'; 


export default class InlineSelect extends Component { 

    renderArrow() {
        return <div className="select-arrow_white">
            <i className="fa fa-chevron-down"></i>
        </div>
    }

    render() { 

        const {options, className, value, onChange} = this.props; 

        return <span className={className}>
            <select></select>
        </span>
    }
}