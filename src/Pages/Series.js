import React, {Component} from 'react'  

import DatePicker from 'react-datepicker'
import moment from 'moment' 

export default class Series extends Component {

    constructor(props) {
        super(props) 
        
        this.state = {
            defaults: new Array(10).fill('no data'), 
            date: moment()
        }
    }
    render() {
        return (
            <div className="container">
               <div className="row">
                    <div className="col-lg-12">
                        <h4>Campaign detail</h4>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-lg-12">
                        <form>
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-3">
                                <div className="datepicker-wrap">
                                        <label className="filter-label">Date</label>
                                        <DatePicker
                                            selected={this.state.date}
                                        /> 
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <th>Campaign</th>
                                    <th>Max drawdown</th>
                                    <th>Starting date</th>
                                    <th>End date</th>
                                    <th>Starting value</th>
                                    <th>End value</th>
                                    <th>Max delta</th>
                                    <th>Total cost</th>
                                    <th>Total number of trades</th>
                                    <th>Average delta</th>
                                </thead>
                                <tbody>
                                    {this.props.campaign_detail.length > 0 ? this.props.campaign_detail.map(i => {
                                        return (
                                            <tr>
                                                <td>{i.campaign || 'no data'}</td>
                                                <td>{i.max_drawdown || 'no data'}</td>
                                                <td>{i.starting_date || 'no data'}</td>
                                                <td>{i.end_date || 'no data'}</td>
                                                <td>{i.starting_value || 'no data'}</td>
                                                <td>{i.end_value || 'no data'}</td>
                                                <td>{i.max_delta || 'no data'}</td>
                                                <td>{i.total_cost || 'no data'}</td>
                                                <td>{i.total_number_of_trades || 'no data'}</td>
                                                <td>{i.average_delta || 'no data'}</td>
                                            </tr>
                                        )
                                    }) : <tr>
                                    {this.state.defaults.map(i => {
                                        return(<td>{i}</td> )
                                    })}
                                    </tr>
                            } 
                                </tbody>
                            </table>
                   
                    </div>
                </div>
            </div>
        )
    }
}