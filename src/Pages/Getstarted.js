import React, { Component } from 'react';
import './css/Getstarted.css';
import { Navigation, Footer, CircleProgress } from '../Components';
var $ = require('jquery');
require('jquery-circle-progress');

class Getstarted extends Component {


    componentDidMount() { 
        $('.circlewheels__cirle-one').circleProgress(
            {
                size: 112,
                thickness: 17,
                startAngle: -Math.PI / 2,
                fill: {
                    gradient: ["rgb(0,78,203)", "rgb(117,167,255)"],
                    gradientAngle: Math.PI * 0.26
                },
                lineCap: 'round',
                animation: {
                    duration: 1000,
                    easing: "linear"
                }
            }
        )
        $('.circlewheels__cirle-two').circleProgress(
            {
                size: 111,
                thickness: 16,
                startAngle: -Math.PI / 2,
                fill: {
                    gradient: ["rgb(255,215,64", "rgb(247,151,30)"],
                    gradientAngle: Math.PI * 0.83
                },
                lineCap: 'round',
                emptyFill: '#f3f3f3',
                animation: {
                    duration: 1000,
                    easing: "linear"
                }
            }
        )
    }

    render() {
        return (
            <div className="getstarted-container" >
                <Navigation activeTab="technology" />
                <div className="nav-underlay"></div>
                <div className="getstarted-content-bgcol">
                    <div className="container-grid-block-getstarted" >
                        <div className="row heading">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h1 className="heading__title-main">Get started by choosing a hedging goal</h1>
                                <p className="heading__title-sub">You can always change your goal or add new ones after you sign up.</p>
                            </div>
                        </div> 
                        <div className="row circlewheels">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <CircleProgress 
                                    radval1="80" 
                                    title={["Training Wheels",false]}
                                    textPart={this.props.location.query.c} 
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <CircleProgress 
                                    radval1="50"
                                    radval2="30" 
                                    title={["Conservative Potential","Cost Savings Hedging"]}
                                    textPart={this.props.location.query.c} 
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <CircleProgress 
                                    radval1="40" 
                                    radval2="30" 
                                    title={["Aggressive Price Potential","Cost Savings Hedging"]}
                                    textPart={this.props.location.query.c} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer ref="footer" />
            </div>
        )
    }
}

export default Getstarted;

