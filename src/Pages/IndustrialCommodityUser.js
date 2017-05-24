import React, { Component } from 'react'; 
import {Navigation, Footer, InlineSelect} from '../Components';  
import {browserHistory} from 'react-router'; 
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
                {label: 'input/natural long', value: 'long'}, 
                {label: 'output/natural short', value: 'short'}
            ]], 
            selected: [{label: 'Crude Oil', value: 'Crude Oil'}, 
            {label: 'input/natural long', value: 'long'}], 
            value: 'dollars'
        } 

        this.onChange = (option, index) => {

            let newSelection = this.state.selected.slice(); 
            newSelection[index] = option; 


            this.setState({
                selected: newSelection
            }, () => { 

                if (index == 0) {
                    this.handleChange(); 
                }
            })
        }

        this.handleChange = () => { 

                let value = '';

                switch (this.state.selected[0].value) {

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


            this.setState({value: value}); 
        }
    
        this.handleChange = this.handleChange.bind(this); 
        this.onChange= this.onChange.bind(this); 
    }

    render() {  

        const {options} = this.state; 
        return (
            <div className="industrial-commodity">
                <div className="industrial-commodity__nav-container">
                    <Navigation />
                </div> 
                <div className="industrial-commodity__content-container">
                    <div className="industrial-text-container">
                        <div className="industrial-text-container__text">
                            I represent a firm with a pre existing risk in the price of 
                            <InlineSelect  

                                className="industrial-text-container__select"  
                                index={0} 
                                onChange={this.onChange}
                                selected={this.state.selected[0]}
                                options={options[0]} />
                        </div>
                        <div className="industrial-text-container__text">
                            This commodity is used as an 
                            <InlineSelect 
                                index={1}
                                onChange={this.onChange}
                                className="industrial-text-container__select"  
                                selected={this.state.selected[1]}
                                options={options[1]} /> 
                            to our ordinary operations. </div>
                        <div className="industrial-text-container__text">
                            My firm needs to hedge the price risk on <span className="industrial-text-container__text_select-value">
                                <span className="underlined">{this.state.value}.</span>
                            </span>
                        </div> 
                        <div className="continue-btn main-btn"
                        onClick={() => {
                        browserHistory.push('/getstarted?c='+ this.state.selected[1].value )
                          }  }>CONTINUE</div>
                    </div>
                </div>
                <div className="industrial-commodity__footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}