import React, { Component } from 'react';  
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';

export default class Chart extends Component {

    componentDidMount() {

        console.log(this.props.data)


    }

    render() {
        return (
            <div className="equity-chart-container">
                <h5 className="series-chart-heading">Campaign equity series</h5>
                <LineChart
                width={this.props.width}
                height={this.props.height}
                data={this.props.data}
                >
                <Line type="monotone" dataKey="equity" stroke="#8884d8" dot={false}/>
                <Line type="monotone" dataKey="h" stroke="rgb(224, 84, 241)" dot={false} /> 
                <Line type="monotone" dataKey="l" stroke="#479a70" dot={false} />
                <Line type="monotone" dataKey="o" stroke="#f37931" dot={false} />
                <Line type="monotone" dataKey="c" stroke="#5476ef" dot={false} />
                <XAxis dataKey="date" interval="preserveStartEnd" tick={{ transform: 'translate(0, 10)' }} minTickGap={800} tickLine={false}/>
                <YAxis type="number" domain={['dataMin', 'dataMax']} tickLine={false}/>
                <Tooltip />
                <Legend />
                </LineChart>
            </div>
        )
    }
}