import React, { Component } from 'react' 
 
export default class SlideText extends Component {

    constructor() {
        super(); 

        this.state = {
            cls: ''
        }
    }


    componentWillReceiveProps(nextProps) { 

            let self = this; 
            this.setState({
                cls: ''
            }) 

            setTimeout(() => {
                self.setState({
                    cls: 'fadein'
                }) 

            })
        

    }
    
    render () {
        return (
            <h1 style={this.state.style} className={this.props.className + ' ' + this.state.cls}>{this.props.children}</h1>
        ) 
    }
}