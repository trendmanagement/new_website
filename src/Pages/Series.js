import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Tabs, Tab } from 'react-mdl';
import moment from 'moment';
import request from 'request';
import { apiEndpoint } from '../config';
import './css/Series.css';
import { Loader } from '../Components';
import '../../node_modules/react-mdl/extra/material.js'

import { Chart, BarChart, RecentDataTable, PayoffChart, PositionsTable } from '../Components';

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join(".");

}


export default class Series extends Component {

    constructor(props) {
        super(props)

        let campaign_detail = props.campaign_detail;

        this.state = {
            date: this.props.date,
            table_data: {
                max_drawdown: '',
                starting_date: '',
                end_date: '',
                starting_value: '',
                end_value: '',
                total_cost: '',
                total_number_of_trades: '',
                max_delta: '',
                average_delta: '',

            },
            campaign_detail: campaign_detail,
            payoffData: [],
            deltaData: [],
            payoff_msg: '',
            positions: [],
            activeTab: 0,
            include_price: 1
        }


        // this.props.campaign_detail.end_date = this.props.campaign_detail.end_date.replace('T00:00:00', '');

        this.generateTable = this.generateTable.bind(this);
        this.getRecentData = this.getRecentData.bind(this);
        this.updatePayoffChart = this.updatePayoffChart.bind(this);
        this.setDate = this.setDate.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.date != this.props.date) {
            this.setState({
                date: nextProps.date
            })
            this.updatePayoffChart(nextProps.date);
        }

    }

    componentDidMount() {

        if (this.props.date != '') {
            this.updatePayoffChart(this.props.date);
        }
    }

    checkHandler(e) {

        if (this.state.include_price == true) {
            this.setState({
                include_price: 0
            })


        } else {
            this.setState({
                include_price: 1
            })
        }

    }

    triggerResize() {
        window.resizeTo(window.innerWidth, window.innerHeight);
    }

    generateTable() {

        let rows = [];
        let first_rows = [];


        for (let prop in this.props.campaign_detail) {

            if (this.props.campaign_detail[prop] || this.props.campaign_detail[prop] === 0) {

                if (prop in this.state.table_data) {

                    let val = this.props.campaign_detail[prop];
                    let prop_str = prop.replace(/_/g, ' ');


                    if (prop == 'starting_date' || prop == 'end_date') {
                        this.props.campaign_detail[prop] = this.props.campaign_detail[prop].replace('T00:00:00', '');
                    }

                    if (prop == 'total_cost' || prop == 'total_number_of_trades' || prop == 'max_drawdown' || prop == 'end_value' || prop == 'starting_value') {
                        if (val != 0) { val = numberWithCommas(val) };


                    }

                    if (prop == 'total_cost' || prop == 'max_drawdown' || prop == 'end_value' || prop == 'starting_value') {
                        if (val.toString().search('-') != -1) {
                            val = '-$' + val.replace('-', '');
                        } else {
                            val = '$' + val;
                        }
                    }


                    if (prop != "starting_value" && prop != "end_value") {
                        rows.push(
                            <tr key={Math.random() * 10000}>
                                <td>{prop_str}</td>
                                <td>{val}</td>
                            </tr>
                        )
                    } else {
                        first_rows.push(
                            <tr key={Math.random() * 10000}>
                                <td>{prop_str}</td>
                                <td>{val}</td>
                            </tr>
                        )
                    }
                }

            }
        }

        return first_rows.concat(rows);
    }

    setDate(date) {
        this.setState({
            date: date
        })

        this.updatePayoffChart(date);
    }

    getRecentData() {

        var obj = Object.assign({}, this.props.campaign_detail);
        var all = obj.series.slice(0);

        if (all.length > 5) {
            return all.slice(Math.max(all.length - 5, 1))
        } else {
            return all;
        }
    }

    updatePayoffChart(date) {

        var d = date;
        var d1 = d.format('YYYY MM DD');
        d = d1.replace(/ /g, '-');
        var d2 = d;

        request({
            type: 'GET',
            uri: `${apiEndpoint}/api/campaigns/payoff/?campaign=${encodeURI(this.props.campaign_detail.campaign)}&date=${d}`
        }, (err, res, body) => {
            if (err) {
                console.log(err)
                return;
            }

            body = JSON.parse(body);
            if (body.status == 'error') {
                console.log(body.message)

                request({
                    type: 'GET',
                    uri: `${apiEndpoint}/api/campaigns/payoff/?campaign=${encodeURI(this.props.campaign_detail.campaign)}`
                }, (err, res, body) => {

                    if (err) {
                        console.log(err)
                        return;
                    }
                    body = JSON.parse(body);
                    if (body.status == 'error') {
                        console.log(body.message)
                        return;
                    }
                    if (body.status == "OK") {

                        this.setState({
                            payoff_msg: 'Couldn\'t show data for ' + d + '. Showing data for ' + body.date.replace('T00:00:00', ''),
                            showPayoff: true,
                            payoffData: body.payoff_series,
                            deltaData: body.delta_series,
                            positions: body.positions
                        })
                    }
                })
                return;
            }

            if (body.status == "OK") {
                this.setState({
                    payoff_msg: 'Showing data for ' + body.date.replace('T00:00:00', ''),
                    showPayoff: true,
                    payoffData: body.payoff_series,
                    deltaData: body.delta_series,
                    positions: body.positions
                })
            }
        })

    }


    render() {

        if (this.props.campaign_detail.length == 0) {
            return <div className="series-container">

                <div className="row">
                    <div className="col-lg-12">
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab>Overview</Tab>
                            <Tab>Performance</Tab>
                        </Tabs>
                    </div>
                </div>
                <Loader />
            </div>
        }
        else return (
            <div className="series-container">

                <div className="row">
                    <div className="col-lg-12">
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab>Performance</Tab>
                            <Tab>Overview</Tab>
                        </Tabs>
                    </div>
                </div>

                <div className="row offset-tab">
                    <div className="col-lg-12">
                        <h5 className="series-chart-title">Campaign: {this.props.campaign_detail.campaign}</h5>
                        <p className="description">{this.props.description}</p>
                    </div>
                </div>
                <div className={"row " + (this.state.activeTab == 1 ? "visible" : "hidden")}>
                    <div className="col-lg-12">
                        <table className="table table-hover series-table">
                            <thead>
                                <tr>
                                    <th className="series-th">Property</th>
                                    <th className="series-th">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.generateTable().map(i => i)}
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className={this.state.activeTab == 0 ? "visible" : "hidden"}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="series-chart-heading">Equity series</h5>
                            <span className="label-span series-span">Include underlying future for comparison &nbsp; &nbsp;</span>
                            <label className={"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select is-upgraded " + (this.state.include_price ? "is-checked" : "")}><input type="checkbox" className="mdl-checkbox__input" checked={this.state.include_price} onChange={this.checkHandler} />
                                <span className="mdl-checkbox__focus-helper"></span><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline"></span></span></label><br />

                            <Chart data={this.props.campaign_detail.series} include_price={this.state.include_price} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <BarChart triggerResize={this.triggerResize} data={this.props.campaign_detail.series} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <RecentDataTable format_num={numberWithCommas} data={this.getRecentData()} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="series-chart-heading">Equity payoff</h5>

                            <form>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-3">
                                        <div className="series-datepicker-wrap">
                                            <label className="filter-label">Date</label>
                                            <DatePicker
                                                selected={this.state.date}
                                                onChange={this.setDate}
                                                />
                                        </div>
                                        {/*<button className="btn btn-info payoff-btn" onClick={this.updatePayoffChart}>Update chart</button>*/}
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="series-info">{this.state.payoff_msg}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.state.showPayoff ? <PayoffChart triggerResize={this.triggerResize} data={this.state.payoffData} title={"Campaign payoff"} /> : <p className="series-chart-heading">No payoff series data</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.state.showPayoff ? <PayoffChart triggerResize={this.triggerResize} data={this.state.deltaData} title={"Campaign delta"} /> : <p className="series-chart-heading">No delta series data</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 positions-container">
                            {this.state.showPayoff ? <PositionsTable format_num={numberWithCommas} data={this.state.positions} /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}