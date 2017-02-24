import React, { Component } from 'react'; 
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';  

export default class PayoffChart extends Component {
    render() {
        return (
            <div className="series-chart-container">
                <LineChart
                data={this.props.data}
                width={this.props.width} 
                height={this.props.height} 
                >
                <Line type="monotone" dot={false} dataKey="curr" stroke="#8884d8" />
                <XAxis tick={{ transform: 'translate(0, 10)' }} interval="preserveStartEnd" minTickGap={800} />
                <YAxis />
                </LineChart>
            </div>
        )
    }
}