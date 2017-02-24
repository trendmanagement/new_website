import React, { Component } from 'react'; 
import { BarChart, Bar, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default class EquityBarChart extends Component {
    render() {
        return (
            <div className="barchart-container">
                <h5 className="series-chart-heading">Campaign delta</h5>
                <BarChart 
                width={this.props.width} 
                height={this.props.height}
                data={this.props.data}>
                    <Bar dataKey="delta" fill="#8884d8" />
                    <YAxis type="number" dataKey="delta" />
                    <XAxis dataKey="date" tick={{ transform: 'translate(0, 10)' }} interval="preserveStartEnd" minTickGap={800} />
                    <Legend />
                    <Tooltip />
                </BarChart>
            </div>
        )
    }
}