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
                startDate: moment().subtract(1, 'months'),
                endDate: moment(),
            },
            use_default: 1,
            btns_disabled: true,
            shown_campaign: 'All',
            custom_date: false,
            date_settings: {
                custom: false,
                default: true,
                year: false,
                months: false,
                month: false
            }
        }

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
        this.generateBtns = this.generateBtns.bind(this);
        this.filterCampaigns = this.filterCampaigns.bind(this);
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

    componentWillReceiveProps(next) {
        if (next.instrument.length > 0) {


            this.setState({
                selected_campaign: next.instrument[0]
            })
        }
    }

    onFormChange(e, prop) {

        var obj = {};
        obj[prop] = e.target.value;

        this.setState({

            formData: Object.assign({}, this.state.formData, obj)
        })

    }

    checkHandler(e) {

        switch (e.target.value) {
            case "month": {
                this.setState({
                    date_settings: {
                        custom: false,
                        default: false,
                        year: false,
                        months: false,
                        month: true
                    },
                    formData: {
                        startDate: moment().subtract(1, 'months'),
                        endDate: moment(),
                    }
                })
                break;
            }
            case "3_months": {
                this.setState({
                    date_settings: {
                        custom: false,
                        default: false,
                        year: false,
                        months: true,
                        month: false
                    },
                    formData: {
                        startDate: moment().subtract(3, 'months'),
                        endDate: moment(),
                    }
                })
                break;
            }
            case "year": {
                this.setState({
                    date_settings: {
                        custom: false,
                        default: false,
                        year: true,
                        months: false,
                        month: false
                    },
                    formData: {
                        startDate: moment().subtract(1, 'years'),
                        endDate: moment(),
                    }
                })
                break;
            }
            case "default": {
                this.setState({
                    date_settings: {
                        custom: false,
                        default: true,
                        year: false,
                        months: false,
                        month: false
                    }
                })
                break;
            }
            case "custom": {
                this.setState({
                    date_settings: {
                        custom: true,
                        default: false,
                        year: false,
                        months: false,
                        month: false
                    },
                    btns_disabled: false,

                    formData: {
                        startDate: moment().subtract(1, 'months'),
                        endDate: moment(),
                    }

                })
                break;
            }
        }

    }

    filterCampaigns(e) {
        this.setState({
            shown_campaign: e.target.value
        })

        this.props.show_selected(e.target.value);
    }
    generateBtns(data) {

        if (data.length == 1) return [];
        let btns = [];


        for (let i = 0; i < data.length; i++) {
            btns.push(<button key={Math.random() * 100000} className={"filter-tab " + (this.state.shown_campaign == data[i] ? "selected" : "")} value={data[i]} onClick={this.filterCampaigns}>{data[i]}</button>)
        }

        btns.unshift(<button key={Math.random() * 100000} className={"filter-tab " + (this.state.shown_campaign == "All" ? "selected" : "")} value={"All"} onClick={this.filterCampaigns}>All</button>)

        return btns;
    }

    render() {
        return (<div className="container-lg">
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="heading">Campaigns List</h4>
                    <p className="subheading">Choose a campaign from the list to see details</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 date-choice-container">
                    <p><b>Display data for </b></p>
                    <button className={"btn date-choice " + (this.state.date_settings.month ? "selected" : "")} value="month" onClick={this.checkHandler}>1 Month</button>
                    <button className={"btn date-choice " + (this.state.date_settings.months ? "selected" : "")} value="3_months" onClick={this.checkHandler}>3 Months</button>
                    <button className={"btn date-choice " + (this.state.date_settings.year ? "selected" : "")} value="year" onClick={this.checkHandler}>Year</button>
                    <button className={"btn date-choice " + (this.state.date_settings.default ? "selected" : "")} value="default" onClick={this.checkHandler}>Full campaign history</button>
                    <button className={"btn date-choice " + (this.state.date_settings.custom ? "selected" : "")} value="custom" onClick={this.checkHandler}>Custom dates</button>
                    <div className={"row " + (this.state.date_settings.custom ? "visible" : "hidden")}>
                        <div className="col-lg-12">
                            <div className="custom-date">
                                <label className="filter-label">Start date</label>
                                <DatePicker
                                    disabled={this.state.btns_disabled}
                                    selected={this.state.formData.startDate}
                                    onChange={this.handleStartDateChange} />
                            </div>
                            <div className="custom-date">
                                <label className="filter-label">End date</label>

                                <DatePicker
                                    disabled={this.state.btns_disabled}
                                    selected={this.state.formData.endDate}
                                    onChange={this.handleEndDateChange} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 filter-tab-container">
                    <p><b>Instrument </b></p>
                    {this.generateBtns(this.props.instrument).map(i => i)}
                </div>
            </div>
            <div className="row form-container">

                <div className="col-lg-12 submit-container">

                    <button disabled={this.props.btnDisabled} className="btn btn-info filter-btn" onClick={() => this.props.viewCampaign(this.state.formData, this.props.campaign, this.state.date_settings.default, this.props.description)}>Display Campaign</button>
                </div>

            </div>


        </div>

        )
    }
}