import React, { Component } from 'react' 

export default class PositionsTable extends Component {
    render () {
        return (
            <div>
                <h5 className="series-chart-heading">Positions</h5> 
                <table className="table table-striped table-hover series-detail-table">
                       <thead>
                            <tr>
                                <th>asset</th>
                                <th>open_price</th>
                                <th>price</th>
                                <th>underlying_price</th> 
                                <th>qty</th> 
                                <th>pnl</th>
                                <th>implied_vol</th>
                                <th>days_to_expiration</th>
                                <th>risk_free_rate</th>
                            </tr>
                       </thead>
                       <tbody>
                        {this.props.data.map(i => {
                            return (<tr>
                                <td>{i.asset}</td>
                                <td>{i.open_price}</td>
                                <td>{i.price}</td>
                                <td>{i.ulprice}</td>
                                <td>{i.qty}</td>
                                <td>{i.pnl}</td>
                                <td>{i.iv}</td>
                                <td>{i.days_to_expiration}</td>
                                <td>{i.riskfreerate}</td>
                            </tr>)
                            })}
                       </tbody>
                </table>
            </div>
        )
    }
}