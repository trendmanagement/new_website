import React, { Component } from 'react' 

export default class PositionsTable extends Component {
    render () { 

        let self = this;
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

                        var v = i.pnl; 
                        i.pnl = self.props.format_num(i.pnl.toFixed(4)); 

                            return (<tr key={Math.random() * 10000}>
                                <td>{i.asset}</td>
                                <td>{i.open_price >= 0 ? ('$' + i.open_price.toFixed(4).toString()) : ('-$' + i.open_price.toFixed(4).toString().replace('-', ''))}</td>
                                <td>{i.price >= 0 ? ('$' + i.price.toFixed(4).toString()) : ('-$' + i.price.toFixed(4).toString().replace('-', ''))}</td>
                                <td>{i.ulprice >= 0 ? ('$' + i.ulprice.toFixed(4).toString()) : ('-$' + i.ulprice.toFixed(4).toString().replace('-', ''))}</td>
                                <td>{i.qty}</td>
                                <td>{v >= 0 ? ("$" + i.pnl) : ("-$" + i.pnl.replace('-', ''))}</td>
                                <td>{i.iv.toFixed(4)}</td>
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