import React, { Component } from 'react'; 
import {Navigation, Footer, InlineSelect} from '../Components';  
import './css/IndustrialCommodity.css'; 

export default class IndustrialCommodityUser extends Component { 

    constructor() {
        super(); 

        this.state = {  
            options: [[
                {label: 'Crude Oil', value: 'Crude Oil'}, 
                {label: 'Corn', value: 'Corn'}, 
                {label: 'Cocoa', value: 'Cocoa'}, 
                {label: 'Soybeans', value: 'Soybeans'}, 
                {label: 'S&P', value: 'Natural Gas'}, 
                {label: 'Natural Gas', value: 'Natural Gas'}, 
                {label: 'Ten Year Notes', value: 'Ten Year Notes'}

            ], [
                {label: 'input/natural long', value: 'input'}, 
                {label: 'output/natural short', value: 'output'}
            ]], 
            selected: [{label: 'Crude Oil', value: 'Crude Oil'}, 
            {label: 'input/natural long', value: 'input'}], 
            value: 'dollars'
        } 

        this.handleChange = (index, val) => { 

            let selected = []; 
            selected[index] = val; 

            let value = '';

            if (index == 0) { 

                switch (selected[0].value) {

                    case 'Crude Oil': 
                    value = 'dollars'; 
                    break; 

                    case 'Corn': 
                    value = 'bushels'; 
                    break; 

                    case 'Cocoa': 
                    value = 'metric tons'; 
                    break; 

                    case 'Soybeans': 
                    value = 'bushels';
                    break; 

                    case 'S&P': 
                    value = 'dollars';
                    break; 

                    case 'Natural Gas': 
                    value = 'million British thermal units'; 
                    break; 

                    case 'Ten Year Notes': 
                    value = 'dollars'; 
                    break; 

                    default: 
                    value = 'dollars'; 
                    break; 
                    
                } 
            }
        }
    }


    render() {  

        this.handleChange = this.handleChange.bind(this); 

        const {options} = this.state; 
        return (
            <div className="industrial-commodity">
                <div className="industrial-commodity__nav-container">
                    <Navigation />
                </div> 
                <div className="industrial-commodity__content-container">
                    <div className="industrial-text-container">
                        <p className="industrial-text-container__text">
                            I represent a firm with a pre existing risk in the price of 
                            <InlineSelect 
                                className="industrial-text-container__select"  
                                options={options[0]} />
                        </p>
                        <p className="industrial-text-container__text">
                            This commodity is used as an 
                            <InlineSelect 
                                className="industrial-text-container__select"  
                                options={options[1]} /> 
                            to our ordinary operations. </p>
                        <p className="industrial-text-container__text">
                            My firm needs to hedge the price risk on <span className="industrial-text-container__text_select-value">
                                {this.state.value}.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="industrial-commodity__footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}