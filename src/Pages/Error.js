import React, { Component } from 'react' 

export default class Error extends Component {
    render() {
        return(
            <div className="container">
                <h3>Error.</h3>
                <h4>{this.props.series_err.message}</h4>
            </div>
        )
    }
}