import React, { Component } from 'react'

import { Grid, Cell } from 'react-mdl'

import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

export default class Filter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            startDate: moment(),
            endDate: moment()
        }

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
    }

    handleStartDateChange(date) {
        console.log(date)
        console.log('start date picked')
        this.setState({
            startDate: date
        })
    }

    handleEndDateChange(date) {
        console.log('end date picked')
        this.setState({
            endDate: date
        })
    }

    render() {
        return (<div>
            <Grid>
                <Cell col={5} offset={1}>
                    <h4 className="heading">Campaigns list</h4>
                </Cell>
            </Grid>
            <div>
                <Grid>
                    <Cell col={2} offset={1}>
                        <label className="filter-label">Start date</label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleStartDateChange} /></Cell>
                    <Cell col={2}>
                        <label className="filter-label">End date</label>
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleEndDateChange} /></Cell>
                    <Cell col={2}>
                        <label className="filter-label">Starting capital</label>
                        <input type="text" className="filter-input" placeholder="$50000" />
                    </Cell>
                    <Cell col={2}>
                        <label className="filter-label">Comission per side</label>
                        <input type="text" className="filter-input" placeholder="$3" />
                    </Cell>
                    <Cell col={2}>
                        <label className="filter-label">Performance fee</label>
                        <input type="text" className="filter-input" placeholder="$5" />
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={2} offset={1}>
                        <button className="btn btn-info filter-btn">Filter data</button>
                    </Cell>
                </Grid>


            </div>

        </div>)
    }
}