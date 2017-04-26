import React, { Component } from 'react';  
import Select from 'react-select'; 

import 'react-select/dist/react-select.css'; 
import './css/Dropdown.css'; 

export default class InstrumentDropdown extends Component { 

    renderValue(src, alt, val, isPlaceholder) {
        return <span>
            <span className="selected-image"><img src={isPlaceholder ? src : `${src.replace('.png', '')}_blue.png`} alt={alt}/></span>
            <span className={isPlaceholder ? "" : "selected-text"}>{val.label || val}</span>
        </span>
    }
    render() {
        const { title, logo, keyname, options, selected, onChange } = this.props; 
        return (
            <div className="instrument-dropdown-container">
                <Select 
                    name={title}
                    value={selected ? selected : title}
                    options={options} 
                    placeholder={this.renderValue(logo, title, title, true)}
                    onChange={(val) => onChange(keyname, val)} 
                    valueRenderer={(val) => this.renderValue(logo, title, val, false)}
                />
            </div>
        )
    }
}  