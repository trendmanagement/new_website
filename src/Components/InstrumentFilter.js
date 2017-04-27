import React, { Component } from 'react';  
import InstrumentDropdown from './InstrumentDropdown'; 

export default class InstrumentFilter extends Component {
    render() {
        let {options, onChange, onFocus} = this.props; 
        let options_array = []; 
        let keys = Object.keys(options); 

        options_array = keys.map(i => {
            return options[i]; 
        })


        return (
            <div className="instrument-filter-container">
                {options_array.map ((i,j) => {
                    return <InstrumentDropdown 
                        key={keys[j]} 
                        keyname={keys[j]} 
                        title={i.label} 
                        options={i.items} 
                        logo={i.logo}
                        onChange={onChange} 
                        selected={i.selected ? i.selected : null} 
                        onOpen={onFocus} 
                    />
                })}
            </div>
        )
    }
}