import React, { Component } from 'react' 

export default class PositionsTable extends Component {
    render () {
        return (
            <div>
                <h5 className="series-chart-heading">Positions</h5> 
                <table className="table table-striped table-hover series-detail-table positions">
                       <thead>
                            <tr>
                                <th>asset</th>
                                <th>open price</th>
                                <th>price</th>
                                <th>underlying price</th> 
                                <th>qty</th> 
                                <th>pnl</th>
                                <th>implied vol</th>
                                <th>days to expiration</th>
                                <th>riskfree rate</th>
                            </tr>
                       </thead>
                       <tbody>
                        {this.props.data.map(i => {
                            return (<tr key={Math.random() * 10000}>
                                <td>{i.asset}</td>
                                <td>{i.open_price.toFixed(4)}</td>
                                <td>{i.price.toFixed(4)}</td>
                                <td>{i.ulprice}</td>
                                <td>{i.qty}</td>
                                <td>{i.pnl.toFixed(4)}</td>
                                <td>{i.iv}</td>
                                <td>{i.days_to_expiration}</td>
                                <td>{i.riskfreerate.toFixed(4)}</td>
                            </tr>)
                            })}
                       </tbody>
                </table>
            </div>
        )
    }
}