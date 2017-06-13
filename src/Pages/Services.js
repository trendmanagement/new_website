import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Navigation, Footer } from '../Components';
import './css/ServiceOptions.css';

class Services extends Component {


    getContent() {

        switch (this.props.location.pathname) {
            case '/alpha-project': {
               
                return (

                    <div className="service-options">
                        <div className="service-options__nav-container">
                        <Navigation activeTab="services" self={this.props.self} />
                        </div>
                        <div className="service-options__content">
                            <div className="service-options__container-grid-block">
                                <h5 className="service-options__title">TM
                                <span className="service-options__title_super">QR </span>
                                    Alpha Project</h5>
                                <div className="service-options__list-description">
                                    <p>
                                        This enterprise seeks to quantify the sources of active management or "Alpha"
                                        through the creation of active trading strategy indexes linked to such factors as:
                                </p>
                                </div>
                                <div className="service-options__list">
                                    <p><span className="service-options__list-header">a. </span>
                                        Trend/Momentum
                                </p>
                                    <p><span className="service-options__list-header">b. </span>
                                        Seasonality
                                </p>
                                    <p><span className="service-options__list-header">c. </span>
                                        Carry
                                </p>
                                    <p><span className="service-options__list-header">d. </span>
                                        Volatility/Option Premium Collection
                                </p>
                                </div>
                                <div className="service-options__btn-container">
                                    <Link to="/tell-about"><div className="service-options__btn-container_btn">FIND OUT MORE</div></Link>
                                </div>
                            </div>  
                        </div>
                        <div className="service-options__footer">
                            <Footer />
                        </div>
                    </div>

                )
            }
            case '/robo-hedger': {
                return (
                    <div className="service-options">
                        <div className="service-options__nav-container">
                        <Navigation activeTab="services" self={this.props.self} />
                        </div>
                        <div className="service-options__content">
                        <div className="service-options__container-grid-block">
                                <h5 className="service-options__title">TM<span className="service-options__title_super">QR </span>
                                    Robo Hedger / TM
                                <span className="service-options__title_super">QR </span>
                                    Robo Manager</h5>
                                <div className="service-options__list-description">
                                    Allows users to design investment / hedging algorithms which can be linked
                                    to separate manged accounts for automated electronic execution.
                                </div>
                                <div className="service-options__btn-container">
                                    <Link to="/tell-about"><div className="service-options__btn-container_btn">FIND OUT MORE</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-options__footer">
                            <Footer />
                        </div>
                    </div>
                )
            }
            case '/tech-services': {

                return (
                    <div className="service-options">
                        <div className="service-options__nav-container">
                        <Navigation activeTab="services" self={this.props.self} />
                        </div>
                        <div className="service-options__content">
                        <div className="service-options__container-grid-block">
                                <h5 className="service-options__title">TM<span className="service-options__title_super">QR </span>
                                    Technology Services</h5>
                                <div className="service-options__list-description">
                                    TMQR Technology Services is a custom consulting service where our team of quants and finance
                                    experts help design and deploy trading and data management solutions to meet the needs of
                                    market makers, investment advisers, fund sponsors or proprietary trading groups.
                            </div>
                                <div className="service-options__btn-container">
                                    <Link to="/tell-about"><div className="service-options__btn-container_btn">FIND OUT MORE</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-options__footer">
                            <Footer />
                        </div>
                    </div>
                )
            }
            case '/value-propositions': {


                return (<div className="service-options">
                        <div className="service-options__nav-container">
                        <Navigation activeTab="valuesprops" self={this.props.self} />
                        </div>
                        <div className="service-options__content">
                        <div className="service-options__container-grid-block">
                            <h5 className="service-options__title">Value / Unique Selling proposition</h5>
                            <div className="service-options__list-description">
                                TMQR offers unique, scalable options (derivatives) research and automated trading platform 
                                where sophisticated firms can develop, test, deploy and refine algorithmic investment, hedging risk, or trading strategies in the global exchange traded derivatives markets.
                            </div>
                            <div className="service-options__btn-container">
                                <Link to="/tell-about"><div className="service-options__btn-container_btn">FIND OUT MORE</div></Link>
                            </div>
                        </div>
                        </div>
                        <div className="service-options__footer">
                            <Footer />
                        </div>
                    </div>)
            }
        }
    }



    render() {
      
        return (
            this.getContent()
        )
    }
}

Services = withRouter(Services);
export default Services; 