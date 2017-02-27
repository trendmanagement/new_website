import React, { Component } from 'react'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import request from 'request'

import 'react-datepicker/dist/react-datepicker.css'

export default class Filter extends Component {

    constructor(props) {
        super(props)

        this.state = {

            formData: {
                startDate: moment(),
                endDate: moment(),
                starting_capital: 0,
                performance_fee: 3,
                commission: 0,
                include_price: 1
            }
        }

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
    }

    handleStartDateChange(date) {

        var formData = Object.assign({}, this.state.formData);

        formData.startDate = date;

        this.setState({
            formData: formData
        })
    }

    handleEndDateChange(date) {

        var formData = Object.assign({}, this.state.formData);
        formData.endDate = date;

        this.setState({
            formData: formData
        })
    }

    onFormChange(e, prop) {

        var obj = {};
        obj[prop] = e.target.value;

        this.setState({

            formData: Object.assign({}, this.state.formData, obj)
        })

    }

    checkHandler(e) {
        if (this.state.include_price == 0) {
            this.setState({ include_price: 1 })
        }
        if (this.state.include_price == 1) {
            this.setState({ include_price: 0 })
        }
    }

    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="heading">Campaigns list</h4>
                    <p className="subheading">Select a campaign from the list below to see details</p>
                </div>
            </div>

                <div className="row form-container">
                   
                        <div className="col-lg-3 col-md-3 col-sm-12 col-lg-offset-1 col-md-offset-1">
                            <label className="filter-label">Start date</label>
                            <DatePicker
                                selected={this.state.formData.startDate}
                                onChange={this.handleStartDateChange} />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <label className="filter-label">End date</label>
                            <DatePicker
                                selected={this.state.formData.endDate}
                                onChange={this.handleEndDateChange} />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                           
                              <button disabled={this.props.btnDisabled} onClick={() => this.viewCampaign(this.state.formData, this.props.campaign)} className="filter-input filter-btn filter-btn-sm hidden-sm hidden-xs">Filter data</button> 
                              <button disabled={this.props.btnDisabled} className="btn btn-info filter-btn hidden-md hidden-lg" onClick={() => this.props.viewCampaign(this.state.formData, this.props.campaign)}>Filter data</button>
                        </div>
                        {/*<div className="col-lg-2 col-md-2 col-sm-3">
                            <label className="filter-label">Starting capital</label>
                            <input type="number" value={this.state.formData.starting_capital} onChange={(e) => this.onFormChange(e, 'starting_capital')} className="filter-input" placeholder="Example: $50000" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-sm-offset-1 col-md-offset-0 col-lg-offset-0">
                            <label className="filter-label">Comission per side</label>
                            <input type="number" value={this.state.formData.commission} onChange={(e) => this.onFormChange(e, 'commission')} className="filter-input" placeholder="Example: $3" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3">
                            <label className="filter-label">Performance fee</label>
                            <input type="number" value={this.state.formData.performance_fee} onChange={(e) => this.onFormChange(e, 'performance_fee')} className="filter-input" placeholder="Example: $5" />
                        </div>
                        <div className="col-sm-3 hidden-md hidden-lg hidden-xs">
                            <label className="filter-label no-margin-bottom">Include price &nbsp; &nbsp;
                            <label className={"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select is-upgraded " + (this.state.include_price ? "is-checked" : "")}><input type="checkbox" className="mdl-checkbox__input" value={this.state.include_price} onChange={this.checkHandler} />
                                    <span className="mdl-checkbox__focus-helper"></span><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline"></span></span></label>
                            </label>
                            <button disabled={this.props.btnDisabled} onClick={this.viewCampaign} className="filter-input filter-btn filter-btn-sm">Filter data</button>
                        </div>*/}
                   
          
                {/*<div className="row hidden-sm" >
                    <div className="col-lg-12">
                        <div className="checkbox-wrap">
                            <span className="label-span">Include price &nbsp; &nbsp;</span>
                            <label className={"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select is-upgraded " + (this.state.include_price ? "is-checked" : "")}><input type="checkbox" className="mdl-checkbox__input" value={this.state.include_price} onChange={this.checkHandler} />
                                <span className="mdl-checkbox__focus-helper"></span><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline"></span></span></label>
                        </div>
                    </div>
                </div>*/}
                {/*<div className="row">

                    <div className="col-lg-12 filter-btn-container">
                        <button disabled={this.props.btnDisabled} className="btn btn-info filter-btn" onClick={() => this.props.viewCampaign(this.state.formData, this.props.campaign)}>Filter data</button>
                    </div>
                </div>*/}
            </div>

        </div>

        )
    }
}