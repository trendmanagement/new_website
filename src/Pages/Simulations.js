import React, { Component } from 'react';
import { options } from '../config';
import './css/Simulations.css';
import moment from 'moment';
import request from 'request';
import List from './List'; 
import { InstrumentFilter, DateFilter, CustomDateFilter, Navigation, Footer } from '../Components';

export default class Simulations extends Component {

    constructor() {
        super()

        let current = moment();

        this.state = {
            options: options,
            selected: null,
            current_date: current,
            one: moment().subtract(1, 'months'),
            three: moment().subtract(3, 'months'),
            year: moment().subtract(1, 'years'),
            sel: 0, 
            start: moment().subtract(1, 'months'), 
            end: current, 
            desc: '', 
            campaign: '', 
            changed: false, 
            campaigns: [{ name: 'no data', description: 'no data', instrument: 'no data' }],
        }

        this.handleInstrumentFilter = (prop, val) => {

            console.log('instrument selection', prop, val);

            let new_options = Object.assign({}, this.state.options);

            let props = Object.keys(new_options);
            for (let i = 0; i < props.length; i++) {
                new_options[props[i]].selected = null;
            }

            new_options[prop]['selected'] = val;
            console.log(new_options)

            this.setState({
                options: new_options,
                selected: val.value
            })
        }

        this.handleDateChange = (e) => {

            this.setState({
                sel: e.target.value
            })
        }
        this.handleCustomDateChange = (val, prop) => {
            let obj = {} 
            if (prop == 'start') {
                obj.start_changed = true
                
            } else if (prop == 'end') {
                obj.end_changed = true
            }

            obj[prop] = val; 
            this.setState(obj);
             
        }
    }

    selectCampaign(e, name, desc, self) {

        console.log(e.target.value)

        var checkdata = this.state.checkdata.slice();
        checkdata = checkdata.fill(false);

        checkdata[e.target.value] = true;

        this.setState({
            checkdata: checkdata,
            selectedCampaign: this.state.campaigns[e.target.value],
            selectedDescription: this.state.campaigns[e.target.value].description,
            btnDisabled: false
        }) 

        self.setState({
            campaign: name,
            desc: desc
        })

    }


    render() {

        return (
            <div className="simulations-container">
                <Navigation activeTab="simulations" />
                <div className="nav-underlay"></div>
                <div className="container-grid-block nav-offset">
                    <h1 className="simulations-title">INSTRUMENT</h1>
                    <InstrumentFilter 
                        options={this.state.options}
                        onChange={this.handleInstrumentFilter} 
                    />
                    <hr className="simulations-line" />
                </div>
                <div className="container-grid-block">
                    <h1 className="simulations-title">DATE RANGE</h1>
                    <DateFilter 
                        onChange={this.handleDateChange} 
                        sel={this.state.sel} 
                    />
                </div>
                <div className="container-grid-block">
                    <h1 className="simulations-title-small">CUSTOM DATE RANGE</h1>
                    <CustomDateFilter 
                        start={this.state.start}  
                        end={this.state.end} 
                        onChange={this.handleCustomDateChange}
                        end_changed={this.state.end_changed}
                        start_changed={this.state.start_changed}
                    />
                </div>
                <div className="container-grid-block">
                    <div className="results-container">
                        <List instr={!this.state.selected ? 'All' : this.state.selected} 
                        selectCampaign={this.selectCampaign}
                        self={this}/>
                    </div>
                </div>
                <div className="container-grid-block">  {/*data, campaign, use_default, description, query_data*/}
                    <div className="display-campaign-btn" 
                  
                    onClick={() => this.props.viewCampaign(
                        {
                            startDate: this.state.start, 
                            endDate: this.state.end

                        }, 
                        this.state.campaign, 
                        this.state.sel == 0 ? true : false, 
                        this.state.desc
                    )}>
                    DISPLAY CAMPAIGN
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}