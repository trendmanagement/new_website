import React, { Component } from 'react'; 
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';  

export default class PayoffChart extends Component {

    componentDidMount() {
        console.log(this.props.data); 
    }
    render() {
        return (
            <div className="series-chart-container">
                {/*<h5 className="series-chart-heading">{this.props.title}</h5>
                <LineChart
                data={this.props.data}
                width={this.props.width} 
                height={this.props.height} 
                >
                <Legend /> 
                <Tooltip />
                <Line type="monotone" dot={false} dataKey="curr" stroke="#8884d8" />
                <Line type="monotone" dot={false} dataKey={this.props.data[0].exp ? "exp" : "expir"} stroke="#c13ba3" />
                <XAxis tick={{ transform: 'translate(0, 10)' }} dataKey="px" interval="preserveStartEnd" />
                <YAxis/>
                </LineChart>*/}
            </div>
        )
    }
}