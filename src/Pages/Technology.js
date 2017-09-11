import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/Technology.css';
import { Navigation, Footer } from '../Components';

export default class Technology extends Component {

    constructor() {
        super() 

        this.state = {
            height: false, 
            offset: false, 
            rowheight: false
        }

        this.stickyFooter = () => {
            let rowheight = this.refs.text.offsetHeight;  

            let cont_height = this.refs.footer.refs.footerContainer.offsetHeight; 
            let pageHeight = this.refs.techContainer.offsetHeight + cont_height; 
			
			if (pageHeight < window.innerHeight) { 
                pageHeight = window.innerHeight
            }

            this.setState({
                offset: pageHeight - cont_height,
                rowheight: rowheight
            })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.stickyFooter); 
        this.stickyFooter(); 
    }

    componentWillUnmount() {
         window.removeEventListener('resize', this.stickyFooter); 
    }

    render() {
        return (
            <div className="tech-container" style={this.state.height ? {height: this.state.height + 'px'} : {height: 'unset'}}>
                <Navigation activeTab="technology" self={this.props.self}/>
                <div className="nav-underlay"></div>
                <div>
                    <div className="container-grid-block" ref="techContainer">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" ref="text">
                                <div className="tech-description-container">
                                    <h1 className="tech-title">Technology</h1>
                                    <p className="tech-text">Our entire system resides on cloud based redundant servers. This removes most information technology threats to ensure a constant uptime. The technology behind our process begins with our models developed in the python programming language. Python lets us develop our strategies quickly and integrate into our real-time trading environment effectively.
                                With python we are able to take ideas and requests from development to a functioning strategy within a short time frame.</p>
                                    <p className="tech-text">
                                        An integral part of our system has been the efficient storage of vast amounts of futures and options data. After pushing the limits of relational databases, we transitioned to NoSQL data storage. We have found MongoDB to have high performance and scalability.
                                </p>
                                    <p className="tech-text">
                                        Real-time software is developed using the Microsoft .NET framework. This communicates with the model and lists out the active orders to execute.
                                 Order execution is done through Trading Technologies TTNET environment. We use their multibroker system allowing us to have access to several brokers and execute through a single system. The real-time system stages orders with their position and limit price to the market through the TT FIX adapter and the final execution is approved by a human. This limits the risk of ‘fat finger error’ or ‘automated execution error’.
                                </p>
                                    <p className="tech-text">
                                        The CQG data api feeds our real-time execution system with up to the moment ticks and populates historical data collections
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={this.state.rowheight && window.innerWidth > 991 ? {height: this.state.rowheight + 'px'} : null}>
                                <div className="illustration-container">
                                    <img src={`${process.env.PUBLIC_URL}/images/tech.png`} alt="tech" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer ref="footer" style={this.state.offset ? {position: 'absolute', top: this.state.offset + 'px'} : {}}/>
            </div>
        )
    }
}