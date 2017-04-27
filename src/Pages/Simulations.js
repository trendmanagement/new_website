import React, { Component } from 'react';
import { options } from '../config';
import './css/Simulations.css';
import moment from 'moment';
import request from 'request';
import List from './List'; 
import Series from './Series'; 
import Error from './Error';  
import { browserHistory } from 'react-router'; 
import { InstrumentFilter, DateFilter, CustomDateFilter, Navigation, Footer, Loader } from '../Components';

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
            start_changed: false, 
            end_changed: false, 
            campaigns: [{ name: 'no data', description: 'no data', instrument: 'no data' }],
            msg: null, 
            campaign_detail: null, 
            series_date: null, 
            campaign_description: null, 
            isLoading: false, 
            campaignShown: false 
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

            if (this.state.campaignShown) {
                browserHistory.push('/simulations')
            }

            this.setState({
                start_changed: false, 
                end_changed: false, 
                sel: e.target.value, 
                campaignShown: false
            }) 


            console.log(this.state)
        }
        this.handleCustomDateChange = (val, prop) => {
            let obj = {} 
            if (prop == 'start') {
                obj.start_changed = true
                
            } else if (prop == 'end') {
                obj.end_changed = true
            }

            obj[prop] = val; 
            obj.campaignShown = false; 

            this.setState(obj, () => {
                if (this.state.start_changed && this.state.end_changed) {
                    this.setState({
                        msg: null
                    })
                }
            }); 

             
        } 

        this.prepareCampaign = () => {

            let start = this.state.start;  
            let end = this.state.end;  

            console.log(this.state.sel)
            switch (this.state.sel) {
                case '1': 
                start = this.state.one; 
                end = this.state.current_date; 
                break; 

                case '3': 
                start = this.state.three;
                end = this.state.current_date; 
                break; 

                case '12': 
                start = this.state.year; 
                end = this.state.current_date; 
                break; 

                case null: 
                if (!this.state.start_changed || !this.state.end_changed) {
                    this.setState({
                        msg: 'Select a date range'
                    })    
                    return
                }; 
                break; 
            } 

            if (this.state.campaign == '') {
                this.setState({
                    msg: 'Select a campaign to proceed'
                })    
                return
            }

            this.setState({
                isLoading: true
            })
            this.props.viewCampaign(
                        {
                            startDate: start, 
                            endDate: end

                        }, 
                        this.state.campaign, 
                        this.state.sel === '0' ? true : false, 
                        this.state.desc
            )
            .then(data => {
                console.log('campaign data', data);  
                browserHistory.push(`simulations/${data.query}`);
                this.setState({
                    campaign_detail: data.campaign_detail, 
                    series_date: data.date, 
                    campaign_description: data.description, 
                    query: data.query, 
                    isLoading: false, 
                    campaignShown: true
                }); 

               
            })
            .catch(err => { console.log(err) })
        }
    }

    selectCampaign(e, name, desc, self) {

        console.log(e.target.value)

        var checkdata = this.state.checkdata.slice();
        checkdata = checkdata.fill(false);

        checkdata[e.target.value] = true;

        this.setState({
            checkdata: checkdata 
        }) 

        self.setState({
            campaign: name,
            desc: desc, 
            msg: null
        })

    } 

    componentDidMount() { 
        let self = this; 
        if (!this.state.campaign_detail && this.props.location.query.campaign) { 

            this.setState({
                isLoading: true
            }) 

            let campaign = encodeURI(this.props.location.query.campaign);
            let starting_date = this.props.location.query.starting_date;
            let end_date = this.props.location.query.end_date;
            let include_price = this.props.location.query.include_price;
            let description = this.props.location.query.d;

            let query;
            if (typeof end_date != 'undefined') {
                query = `?campaign=${campaign}&starting_date=${starting_date}&end_date=${end_date}&include_price=${include_price}`
            } else {
                query = `?campaign=${campaign}&include_price=${include_price}`
            }

            console.log(query)
            this.props.viewCampaign(null, null, null, description, query)
            .then((data) => {
                self.setState({
                    campaign_detail: data.campaign_detail, 
                    series_date: data.date, 
                    campaign_description: data.description, 
                    query: data.query, 
                    isLoading: false, 
                    campaignShown: true
                }) 

                
            })
            .catch(err => {
                console.log(err); 
            })
        }
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
                        onFocus={() => {
                            if (this.state.campaignShown) {
                                browserHistory.push('/simulations')
                            }
                            
                            this.setState({campaignShown: false})
                        }}
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
                        onFocus={() => {
                            
                            if (this.state.campaignShown) {
                                browserHistory.push('/simulations')
                            }

                            this.setState({sel: null, campaignShown: false})
                        }}
                    />
                </div>
                {this.state.isLoading ? 
                    <div className="container-grid-block top-padded"><Loader /></div> : null} 
                {!this.state.campaignShown ?
                <div className="container-grid-block">
                <div>
                    <div className="results-container">
                        <List 
                        instr={!this.state.selected ? 'All' : this.state.selected} 
                        location={this.props.location}
                        selectCampaign={this.selectCampaign}
                        self={this}/>
                    </div>
                </div>
                <div className="container-grid-block">  {/*data, campaign, use_default, description, query_data*/}
                    <button className="display-campaign-btn" 
                  
                    onClick={this.prepareCampaign}>
                    DISPLAY CAMPAIGN
                    </button>
                    <div className="error">{this.state.msg}</div>
                </div></div> : null
                }
                {this.state.campaign_detail && this.state.campaignShown ? 
                    <div className="container-grid-block top-padded series-block">
                    <Series 
                        campaign_detail={this.state.campaign_detail}
                        date={this.state.series_date} 
                        description={this.state.campaign_description}/> 
                    </div>
                    : null} 
 
                <Footer />
            </div>
        )
    }
}