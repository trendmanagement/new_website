import React, { Component } from 'react' 

export default class Table extends Component {

    generateBody(d) { 

        let rows = []; 
        for (let i = 0; i < d.length; i++) {
            
            rows.push(<tr key={Math.random() * 100000}>
                <td>{d[i].date.replace('T00:00:00', '')}</td>
                <td>{d[i].trade_count}</td>
                <td>{d[i].change}</td>
                <td>{d[i].equity}</td>
                <td>{d[i].delta}</td>
            </tr>)
        }

        return rows; 
    }
     
    render() {
        return(
            <div>
                <h5 className="series-chart-heading">Recent campaign series values</h5>
                <table className="table table-striped table-hover series-detail-table">
                    <thead><tr>
                        <th>date</th>
                        <th>trade_count</th>
                        <th>change</th>
                        <th>equity</th>
                        <th>delta</th>
                    </tr></thead>
                    <tbody>{this.generateBody(this.props.data).map(i => i)}</tbody>
                </table>
            </div>
        )
    }
}