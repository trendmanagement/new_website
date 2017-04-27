import React, { Component } from 'react' 

export default class Error extends Component {
    render() {
        return(
            <div className="container-grid-block">
                <div style={{height: '300px'}}>
                    <h4>{this.props.message}</h4>
                </div>
            </div>
        )
    }
}