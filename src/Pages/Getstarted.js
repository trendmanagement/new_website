import React, { Component } from 'react';
import './css/Getstarted.css';
import { Navigation, Footer, CircleProgress } from '../Components';

class Getstarted extends Component {

    render() {
        return (
            <div className="getstarted-container" >
                <Navigation activeTab="technology" />
                <div className="nav-underlay"></div>
                <div className="getstarted-content-bgcol">
                    <div className="container-grid-block getstarted-offset" >
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

