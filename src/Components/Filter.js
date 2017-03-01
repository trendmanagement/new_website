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
            btns_disabled: true
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
        if (this.state.use_default == 0) {
            this.setState({ 
                use_default: 1, 
                btns_disabled: true    
              })
        }
        if (this.state.use_default == 1) {
            this.setState({ 
                use_default: 0,
                btns_disabled: false        
          })
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
                                disabled={this.state.btns_disabled}
                                selected={this.state.formData.startDate}
                                onChange={this.handleStartDateChange} />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <label className="filter-label">End date</label>
                           
                            <DatePicker
                                disabled={this.state.btns_disabled}
                                selected={this.state.formData.endDate}
                                onChange={this.handleEndDateChange} />
                      
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                       
                            <span className="label-span">Use default date settings &nbsp; &nbsp;</span>
                            <label className={"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select is-upgraded "}><input type="checkbox" className="mdl-checkbox__input" checked={this.state.use_default} onChange={this.checkHandler} />
                                <span className="mdl-checkbox__focus-helper"></span><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline"></span></span></label><br />
                    
                              <button disabled={this.props.btnDisabled} onClick={() => this.props.viewCampaign(this.state.formData, this.props.campaign, this.state.use_default)} className="filter-input filter-btn filter-btn-sm hidden-sm hidden-xs">Display Campaign</button> 
                              <button disabled={this.props.btnDisabled} className="btn btn-info filter-btn hidden-md hidden-lg" onClick={() => this.props.viewCampaign(this.state.formData, this.props.campaign, this.state.use_default)}>Display Campaign</button>
                        </div>
            </div>

        </div>

        )
    }
}