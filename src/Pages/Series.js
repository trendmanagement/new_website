import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import { Tabs, Tab } from 'react-mdl';

import moment from 'moment';
import request from 'request';

import { Chart, BarChart, RecentDataTable, PayoffChart, PositionsTable } from '../Components';

export default class Series extends Component {

    constructor(props) {
        super(props)

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
            chart_width: 1170,
            chart_height: 600,
            payoffData: [],
            deltaData: [],
            payoff_msg: '',
            positions: [],
            activeTab: 0
        }

        this.props.campaign_detail.end_date = this.props.campaign_detail.end_date.replace('T00:00:00', '');

        this.generateTable = this.generateTable.bind(this);
        this.getRecentData = this.getRecentData.bind(this);
        this.updatePayoffChart = this.updatePayoffChart.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    componentDidMount() {
        var container = document.querySelector('.container');
        var w = parseInt(window.getComputedStyle(container, null).width);

        this.setState({
            chart_width: w - 100,
            chart_height: window.innerHeight / 2.5
        })

        this.updatePayoffChart(this.state.date);
    }

    generateTable() {

        let rows = [];
        console.log(this.props.campaign_detail)
        for (let prop in this.props.campaign_detail) {
            if (this.props.campaign_detail[prop]) {

                if (prop in this.state.table_data) {

                    let val = this.props.campaign_detail[prop];
                    let prop_str = prop.replace(/_/g, ' ');

                    if (prop == 'starting_date' || prop == 'end_date') {
                        this.props.campaign_detail[prop] = this.props.campaign_detail[prop].replace('T00:00:00', '');
                    }


                    rows.push(
                        <tr key={Math.random() * 10000}>
                            <td>{prop_str}</td>
                            <td>{val}</td>
                        </tr>
                    )
                }

            }
        }

        console.log(rows)

        return rows;
    }

    setDate(date) {
        this.setState({
            date: date
        })

        this.updatePayoffChart(date);
    }

    getRecentData() {
        var all = this.props.campaign_detail.series;

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
        console.log('-----d2------');
        console.log(d2)

        request({
            type: 'GET',
            uri: `http://149.56.126.25:28864/api/campaigns/payoff/?campaign=${encodeURI(this.props.campaign_detail.campaign)}&date=${d}`
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
                    uri: `http://149.56.126.25:28864/api/campaigns/payoff/?campaign=${encodeURI(this.props.campaign_detail.campaign)}`
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


                        // var d2 = body.date; 
                        // d2 = d2.split('-'); 


                        console.log('----body-----');
                        console.log(body)
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
        return (
            <div className="container series-container">

                <div className="row">
                    <div className="col-lg-12">
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab>Overview</Tab>
                            <Tab>Performance</Tab>
                        </Tabs>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <h5 className="series-chart-title">Campaign: {this.props.campaign_detail.campaign}</h5>
                    </div>
                </div>
                <div className={"row " + (this.state.activeTab == 0 ? "visible" : "hidden")}>
                    <div className="col-lg-12">
                        <table className="table table-striped table-hover series-table">
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
                <div className={this.state.activeTab == 1 ? "visible" : "hidden"}>
                    <div className="row">
                        <div className="col-lg-12">
                            <Chart data={this.props.campaign_detail.series} width={this.state.chart_width} height={this.state.chart_height} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <BarChart data={this.props.campaign_detail.series} width={this.state.chart_width} height={this.state.chart_height / 1.5} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <RecentDataTable data={this.getRecentData()} />
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
                            {this.state.showPayoff ? <PayoffChart data={this.state.payoffData} width={this.state.chart_width} height={this.state.chart_height} title={"Payoff series"} /> : <p className="series-chart-heading">No payoff series data</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.state.showPayoff ? <PayoffChart data={this.state.deltaData} width={this.state.chart_width} height={this.state.chart_height / 2} title={"Delta series"} /> : <p className="series-chart-heading">No delta series data</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 positions-container">
                            {this.state.showPayoff ? <PositionsTable data={this.state.positions} /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}